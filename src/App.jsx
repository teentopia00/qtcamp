import { churchInfo } from './data/churchInfo'
import { facilityGuide, keyGuide } from './data/facilityGuide'
import { missionAreas } from './data/missionAreas'
import { places } from './data/places'
import { schedule } from './data/schedule'

const contacts = [
  {
    role: '차량 및 방송관련',
    name: '김재헌 안수집사',
    phone: '010-4170-9140',
  },
  {
    role: '부엌 및 청소관련',
    name: '이순자 집사',
    phone: '010-4154-8875',
  },
]

const menuItems = [
  { id: 'schedule', label: '오늘 일정', hint: '7/16-18' },
  { id: 'church', label: '교회소개', hint: '홈페이지' },
  { id: 'facility', label: '시설 안내', hint: '열쇠·공간' },
  { id: 'places', label: '주변 안내', hint: '식당·카페' },
  { id: 'mission', label: '전도 지역', hint: '지도 링크' },
  { id: 'contact', label: '긴급 문의', hint: '전화 연결' },
]

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 rounded-card bg-white/95 p-4 shadow-soft ring-1 ring-amber-100 min-[390px]:p-5">
      <p className="text-base font-bold text-camp-coral">{eyebrow}</p>
      <h2 className="mt-1 text-2xl font-black text-camp-ink">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  )
}

function ExternalButton({ href }) {
  if (!href) {
    return (
      <span className="inline-flex min-h-12 items-center justify-center rounded-card bg-stone-100 px-4 text-lg font-bold text-stone-600">
        현장 문의
      </span>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex min-h-12 items-center justify-center rounded-card bg-camp-leaf px-4 text-lg font-black text-white shadow-sm transition active:scale-[0.98]"
    >
      네이버 지도열기
    </a>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-camp-cream text-camp-ink">
      <header id="top-menu" className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 camp-pattern" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-3xl flex-col gap-6 px-5 pb-8 pt-7">
          <div className="inline-flex w-fit rounded-full bg-camp-mint px-4 py-2 text-base font-black text-camp-leaf">
            2026년 7월 협력행사 안내
          </div>
          <div>
            <p className="text-xl font-black text-camp-coral">우리들 교회 × 부산진성결교회</p>
            <h1 className="mt-2 break-keep text-[2rem] font-black leading-tight tracking-normal text-camp-ink min-[390px]:text-4xl sm:text-5xl">
              {churchInfo.eventName}
            </h1>
            <p className="mt-4 text-xl font-bold leading-relaxed text-stone-700">
              {churchInfo.welcome}
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-2 min-[390px]:gap-3" aria-label="주요 메뉴">
            {menuItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="min-h-24 rounded-card bg-white p-3 text-left shadow-soft ring-1 ring-amber-100 transition active:scale-[0.98] min-[390px]:p-4"
              >
                <span className="block break-keep text-[1.2rem] font-black leading-snug text-camp-ink min-[390px]:text-xl">{item.label}</span>
                <span className="mt-1 block text-base font-bold text-camp-leaf">{item.hint}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-3xl flex-col gap-5 px-4 pb-32 pt-5 min-[390px]:px-5">
        <Section id="schedule" eyebrow="1. 오늘 일정" title="캠프 전체 일정">
          <div className="flex flex-col gap-4">
            {schedule.map((day) => (
              <article key={day.date} className="rounded-card bg-orange-50 p-4 ring-1 ring-orange-100">
                <h3 className="text-2xl font-black text-camp-leaf">
                  {day.date}({day.day})
                </h3>
                <ol className="mt-4 flex flex-col gap-3">
                  {day.items.map((item) => (
                    <li key={`${day.date}-${item.time}-${item.title}`} className="flex gap-3 rounded-card bg-white p-3">
                      <time className="w-24 shrink-0 text-lg font-black text-camp-coral">{item.time}</time>
                      <span className="text-xl font-bold leading-snug">{item.title}</span>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </Section>

        <Section id="church" eyebrow="2. 교회소개" title={churchInfo.name}>
          {churchInfo.description ? (
            <p className="text-xl font-bold leading-relaxed text-stone-700">{churchInfo.description}</p>
          ) : null}
          <a
            href={churchInfo.homepage}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-14 w-full items-center justify-center rounded-card bg-camp-coral px-5 text-xl font-black text-white shadow-sm transition active:scale-[0.98]"
          >
            교회 홈페이지 열기
          </a>
        </Section>

        <Section id="facility" eyebrow="3. 교회시설 사용안내" title="열쇠 및 소그룹 공간안내">
          <div className="rounded-card bg-camp-sky p-4">
            <h3 className="text-2xl font-black">열쇠위치</h3>
            <div className="mt-4 flex flex-col gap-3">
              {keyGuide.map((item) => (
                <div key={item.title} className="rounded-card bg-white p-4">
                  <p className="text-xl font-black text-camp-leaf">{item.title}</p>
                  <p className="mt-1 text-lg font-bold leading-relaxed text-stone-700">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-3">
            {facilityGuide.map((floor) => (
              <article key={floor.floor} className="rounded-card bg-orange-50 p-4 ring-1 ring-orange-100">
                <h3 className="text-2xl font-black text-camp-leaf">{floor.floor}</h3>
                <ul className="mt-3 grid gap-2">
                  {floor.rooms.map((room) => (
                    <li key={room} className="rounded-card bg-white px-4 py-3 text-xl font-bold">
                      {room}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="places" eyebrow="4. 주변 생활시설 안내" title="주변에서 필요한 곳">
          <div className="flex flex-col gap-5">
            {places.map((category) => (
              <article key={category.category} className="rounded-card bg-orange-50 p-4 ring-1 ring-orange-100">
                <h3 className="text-2xl font-black text-camp-leaf">{category.label}</h3>
                <div className="mt-4 flex flex-col gap-4">
                  {category.groups.map((group) => (
                    <div key={group.title}>
                      <p className="mb-2 text-lg font-black text-camp-coral">{group.title}</p>
                      <div className="grid gap-3">
                        {group.items.map((place) => (
                          <div key={`${group.title}-${place.name}`} className="flex flex-col gap-3 rounded-card bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
                            <span>
                              <span className="block text-xl font-bold">{place.name}</span>
                              {place.note ? (
                                <span className="mt-1 block text-lg font-bold leading-relaxed text-camp-coral">
                                  {place.note}
                                </span>
                              ) : null}
                            </span>
                            <ExternalButton href={place.link} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="mission" eyebrow="5. 전도활동 지역 안내" title="전도 구역">
          <div className="grid gap-3">
            {missionAreas.map((area) => (
              <article key={area.name} className="rounded-card bg-orange-50 p-4 ring-1 ring-orange-100">
                <p className="text-2xl font-black text-camp-leaf">{area.name}</p>
                <p className="mt-1 text-xl font-bold text-stone-700">{area.activity}</p>
                <div className="mt-4">
                  <ExternalButton href={area.link} />
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow="6. 긴급 문의" title="도움이 필요할 때">
          <div className="grid gap-3">
            {contacts.map((contact) => (
              <a
                key={contact.phone}
                href={`tel:${contact.phone.replaceAll('-', '')}`}
                className="rounded-card bg-camp-leaf p-5 text-white shadow-sm transition active:scale-[0.98]"
              >
                <span className="block text-lg font-bold text-camp-mint">{contact.role}</span>
                <span className="mt-1 block text-2xl font-black">{contact.name}</span>
                <span className="mt-2 block text-2xl font-black">{contact.phone}</span>
              </a>
            ))}
          </div>
        </Section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-amber-200 bg-white/95 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-10px_30px_rgba(95,63,32,0.12)] backdrop-blur min-[390px]:px-4">
        <div className="mx-auto max-w-3xl">
          <button
            type="button"
            onClick={() => scrollToSection('top-menu')}
            className="flex min-h-14 w-full items-center justify-center rounded-card bg-camp-leaf px-4 text-center text-xl font-black leading-snug text-white"
          >
            메뉴로 돌아가기
          </button>
        </div>
      </div>
    </div>
  )
}
