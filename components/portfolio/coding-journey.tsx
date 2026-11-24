import { ArrowUpRight } from 'lucide-react'
import { site } from '@/lib/site'
import { LeetcodeIcon } from './brand-icons'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

type DifficultyCount = { difficulty: 'All' | 'Easy' | 'Medium' | 'Hard'; count: number }

type LeetcodeStats = {
  solved: Record<DifficultyCount['difficulty'], number>
  total: Record<DifficultyCount['difficulty'], number>
  streak: number
  activeDays: number
}

const query = `query($username: String!) {
  matchedUser(username: $username) {
    submitStatsGlobal { acSubmissionNum { difficulty count } }
    userCalendar { streak totalActiveDays }
  }
  allQuestionsCount { difficulty count }
}`

function toRecord(list: DifficultyCount[]) {
  return Object.fromEntries(list.map((item) => [item.difficulty, item.count])) as LeetcodeStats['solved']
}

async function getLeetcodeStats(): Promise<LeetcodeStats | null> {
  try {
    const res = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Referer: 'https://leetcode.com' },
      body: JSON.stringify({ query, variables: { username: site.leetcodeUsername } }),
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(8000),
    })
    if (!res.ok) return null
    const { data } = await res.json()
    const user = data?.matchedUser
    if (!user?.submitStatsGlobal?.acSubmissionNum || !data?.allQuestionsCount) return null
    return {
      solved: toRecord(user.submitStatsGlobal.acSubmissionNum),
      total: toRecord(data.allQuestionsCount),
      streak: user.userCalendar?.streak ?? 0,
      activeDays: user.userCalendar?.totalActiveDays ?? 0,
    }
  } catch {
    return null
  }
}

const difficulties = [
  { key: 'Easy', color: 'bg-emerald-400', text: 'text-emerald-400' },
  { key: 'Medium', color: 'bg-amber-400', text: 'text-amber-400' },
  { key: 'Hard', color: 'bg-rose-400', text: 'text-rose-400' },
] as const

export async function CodingJourney() {
  const stats = await getLeetcodeStats()

  return (
    <section id="coding" className="relative py-24 md:py-32">
      <div aria-hidden="true" className="absolute inset-x-0 top-1/3 -z-10 mx-auto h-72 max-w-4xl rounded-full bg-brand-violet/10 blur-[120px]" />
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="LeetCode"
          title="Coding journey"
          description="Sharpening problem-solving skills through consistent practice on data structures and algorithms."
        />

        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 p-6 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-white shadow-lg shadow-brand-violet/30">
                  <LeetcodeIcon className="size-7" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{site.leetcodeUsername}</h3>
                  <p className="text-sm text-muted-foreground">LeetCode profile</p>
                </div>
              </div>
              <a
                href={site.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-brand-violet/20 transition-transform hover:scale-[1.03]"
              >
                View LeetCode profile
                <ArrowUpRight className="size-4" />
              </a>
            </div>

            {stats ? (
              <>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <StatCard label="Problems solved" value={stats.solved.All} />
                  <StatCard label="Current streak" value={`${stats.streak} days`} />
                  <StatCard label="Active days (this year)" value={stats.activeDays} />
                </div>

                <ul className="mt-6 grid gap-4 sm:grid-cols-3">
                  {difficulties.map(({ key, color, text }) => {
                    const solved = stats.solved[key] ?? 0
                    const total = stats.total[key] || 1
                    return (
                      <li key={key} className="rounded-2xl border border-border bg-background/60 p-5">
                        <div className="flex items-baseline justify-between">
                          <span className={`text-sm font-medium ${text}`}>{key}</span>
                          <span className="font-mono text-sm">
                            {solved}
                            <span className="text-muted-foreground">{` / ${stats.total[key]}`}</span>
                          </span>
                        </div>
                        <div
                          className="mt-3 h-1.5 overflow-hidden rounded-full bg-secondary"
                          role="progressbar"
                          aria-label={`${key} problems solved`}
                          aria-valuenow={solved}
                          aria-valuemin={0}
                          aria-valuemax={stats.total[key]}
                        >
                          <div className={`h-full rounded-full ${color}`} style={{ width: `${Math.max((solved / total) * 100, 1)}%` }} />
                        </div>
                      </li>
                    )
                  })}
                </ul>
                <p className="mt-5 text-xs text-muted-foreground">Live data from LeetCode, refreshed hourly.</p>
              </>
            ) : (
              <p className="mt-8 rounded-2xl border border-border bg-background/60 p-5 text-sm leading-relaxed text-muted-foreground">
                Live problem statistics are currently unavailable. Visit the LeetCode profile to see the latest coding
                activity.
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-2xl border border-border bg-background/60 p-5 text-center">
      <p className="text-gradient text-3xl font-semibold">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  )
}
