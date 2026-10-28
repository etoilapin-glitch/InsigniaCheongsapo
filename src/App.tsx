import { useEffect, useMemo, useState } from "react"

const images = {
  hero: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&w=2200&q=88",
  suite:
    "https://images.unsplash.com/photo-1709187516056-d4929b67e89f?auto=format&fit=crop&w=1600&q=88",
  suiteTwo:
    "https://images.unsplash.com/photo-1774423864869-702b21c2490a?auto=format&fit=crop&w=1400&q=85",
  outdoor:
    "https://images.unsplash.com/photo-1735770517146-e95c872226fc?auto=format&fit=crop&w=1600&q=88",
  indoor:
    "https://images.unsplash.com/photo-1664876080601-acf03b40c5e3?auto=format&fit=crop&w=1400&q=85",
  gallery:
    "https://images.unsplash.com/photo-1723974591057-ccadada1f283?auto=format&fit=crop&w=1800&q=88",
  haewoldang:
    "https://images.unsplash.com/photo-1560053608-13721e0d69e8?auto=format&fit=crop&w=1200&q=85",
  terra:
    "https://images.unsplash.com/photo-1531973968078-9bb02785f13d?auto=format&fit=crop&w=1200&q=85",
  miyabi:
    "https://images.unsplash.com/photo-1552960226-639240203497?auto=format&fit=crop&w=1200&q=85",
  cafe: "https://images.unsplash.com/photo-1744776411221-702f2848b0b2?auto=format&fit=crop&w=1200&q=85",
}

type IconName = "arrow" | "calendar" | "close" | "menu" | "chevron"

function Icon({
  name,
  className = "size-5",
}: {
  name: IconName
  className?: string
}) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    calendar: (
      <>
        <rect width="18" height="18" x="3" y="4" rx="1" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </>
    ),
    close: (
      <>
        <path d="M18 6 6 18M6 6l12 12" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    chevron: <path d="m9 18 6-6-6-6" />,
  }

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

const nav = [
  ["STAY", "rooms"],
  ["EXPERIENCE", "experience"],
  ["DINING", "dining"],
  ["ART & CULTURE", "gallery"],
  ["ABOUT", "about"],
]

const rooms = [
  {
    name: "Ocean Signature Suite",
    ko: "오션 시그니처 스위트",
    info: "2인 · 86㎡ · 오션 프런트",
    image: images.suite,
    description:
      "청사포의 수평선을 가장 가까이 마주하는 시그니처 스위트입니다. 침실과 거실, 욕실 어디에서든 바다의 빛과 시간의 변화를 온전히 누릴 수 있습니다.",
    features: ["파노라마 오션 뷰", "킹 베드 1", "프라이빗 리빙룸", "오션 뷰 배스"],
    gallery: [
      images.suite,
      "https://images.unsplash.com/photo-1779942578833-5f00dc79d6d1?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1760204741315-abfc98ce3bf5?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1791671029533-4345d2aa2ed3?auto=format&fit=crop&w=1800&q=85",
    ],
  },
  {
    name: "Cheongsapo Grand Suite",
    ko: "청사포 그랜드 스위트",
    info: "4인 · 122㎡ · 프라이빗 테라스",
    image: images.suiteTwo,
    description:
      "가족과 가까운 이들이 함께 머물 수 있도록 여유롭게 설계한 그랜드 스위트입니다. 독립된 침실과 넓은 테라스가 청사포에서의 하루를 한층 깊게 완성합니다.",
    features: ["프라이빗 오션 테라스", "독립 침실 2", "다이닝 라운지", "프리미엄 미니바"],
    gallery: [
      images.suiteTwo,
      "https://images.unsplash.com/photo-1776876648949-63ccabf63b10?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1702830499141-a0634d87d6af?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1668277155881-9d3bccb1683a?auto=format&fit=crop&w=1800&q=85",
    ],
  },
]

type Room = (typeof rooms)[number]

const dining = [
  {
    name: "해월당",
    sub: "HAEWOLDANG",
    type: "KOREAN DINING",
    desc: "해운대의 바다와 사계절 식재료를 현대적인 한식으로 풀어낸 깊이 있는 미식 경험.",
    image: images.haewoldang,
    detailTitle: "계절과 바다를 담은 한식",
    meta: "LUNCH 12:00–15:00 · DINNER 18:00–22:00",
    features: ["현대 한식 코스", "프라이빗 다이닝룸", "제철 로컬 식재료", "전통주 페어링"],
    gallery: [
      "https://images.unsplash.com/photo-1647168585205-e56ebb24a669?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1583354608715-177553a4035e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1622140739492-f82f386260b5?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1567745218240-95b39d13de05?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    name: "테라 에 마레",
    sub: "TERRA E MARE",
    type: "ITALIAN DINING",
    desc: "최상급 육류와 갓 잡은 해산물, 불과 바다의 풍미가 만나는 이탈리안 파인 다이닝.",
    image: images.terra,
    detailTitle: "불과 바다가 만나는 식탁",
    meta: "DINNER 18:00–23:00 · CLOSED MONDAY",
    features: ["이탈리안 테이스팅 코스", "오픈 파이어 키친", "소믈리에 셀렉션", "오션 뷰 테이블"],
    gallery: [
      images.haewoldang,
      "https://images.unsplash.com/photo-1531973968078-9bb02785f13d?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1560053608-13721e0d69e8?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1667388968964-4aa652df0a9b?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    name: "미야비 雅",
    sub: "MIYABI",
    type: "JAPANESE DINING",
    desc: "재료 본연의 결을 섬세하게 살린 정갈한 가이세키와 스시 오마카세.",
    image: images.miyabi,
    detailTitle: "재료의 결을 살린 미식",
    meta: "DINNER 17:30–22:00 · RESERVATION ONLY",
    features: ["가이세키 코스", "스시 오마카세", "셰프 카운터", "사케 페어링"],
    gallery: [
      images.miyabi,
      "https://images.unsplash.com/photo-1557955776-857434f1c951?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1743592889729-d8a92388412e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1567745218240-95b39d13de05?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    name: "그랑 아카이브",
    sub: "GRAND ARCHIVE",
    type: "CAFÉ & PÂTISSERIE",
    desc: "정교한 케이크와 디저트, 향 깊은 커피가 머무는 우아한 살롱.",
    image: images.cafe,
    detailTitle: "달콤한 기억을 수집하는 살롱",
    meta: "DAILY 08:00–21:00 · LAST ORDER 20:30",
    features: ["시그니처 파티세리", "스페셜티 커피", "애프터눈 티", "테이크아웃 서비스"],
    gallery: [
      images.cafe,
      "https://images.unsplash.com/photo-1785642548717-259afa62c791?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1583354608715-177553a4035e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1622140739492-f82f386260b5?auto=format&fit=crop&w=1600&q=85",
    ],
  },
]

const experiences = [
  {
    name: "The Infinite Blue",
    ko: "인피니티 아웃도어 풀",
    type: "01 · OUTDOOR POOL",
    detailTitle: "수평선과 이어지는 가장 푸른 순간",
    desc: "청사포의 바다와 하나로 이어지는 대규모 야외 수영장입니다. 낮에는 투명한 햇살을, 저녁에는 수면 위로 번지는 노을을 바라보며 온전한 휴식을 경험하세요.",
    meta: "DAILY 07:00–21:00 · HOTEL GUESTS ONLY",
    features: ["오션 인피니티 풀", "선베드 라운지", "풀사이드 서비스", "선셋 타임"],
    gallery: [
      images.outdoor,
      "https://images.unsplash.com/photo-1596746698204-d69844da956d?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1557750505-e7b4d1c40410?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1790846069171-2ec595795141?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    name: "Private Waters",
    ko: "프라이빗 인도어 풀",
    type: "02 · INDOOR POOL",
    detailTitle: "고요하게 머무는 사적인 물",
    desc: "날씨와 계절에 방해받지 않고 물의 온기와 고요를 누리는 실내 수영장입니다. 절제된 빛과 깊은 색감이 오롯이 자신에게 집중하는 시간을 만듭니다.",
    meta: "DAILY 08:00–22:00 · ADVANCE BOOKING",
    features: ["프라이빗 세션", "온수 풀", "릴랙싱 라운지", "웰니스 어메니티"],
    gallery: [
      images.indoor,
      "https://images.unsplash.com/photo-1785097565616-9949a00091de?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1687569407170-06b7898e5fcc?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1764786085560-33ab8a5704a6?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    name: "Walk with the sea",
    ko: "호텔 전용 해안 산책로",
    type: "03 · COASTAL TRAIL",
    detailTitle: "바다와 나란히 걷는 길",
    desc: "소나무 향과 파도 소리를 따라 이어지는 호텔 전용 산책로입니다. 청사포의 해안선을 천천히 걸으며 자연의 리듬으로 돌아가는 시간을 만나보세요.",
    meta: "OPEN 24 HOURS · 1.8 KM COASTAL ROUTE",
    features: ["호텔 전용 동선", "오션 전망대", "선라이즈 코스", "야간 조명"],
    gallery: [
      "https://images.unsplash.com/photo-1772869603278-2e8e01060843?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1708004579596-35b916e6c97f?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1772451007418-d881fb67ccb1?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1772452142174-cf0a86bf0bfe?auto=format&fit=crop&w=1600&q=85",
    ],
  },
]

type PlaceDetail = (typeof experiences)[number] | (typeof dining)[number]

const weekdays = ["일", "월", "화", "수", "목", "금", "토"]

function formatDate(date: Date | null) {
  if (!date) return "날짜 선택"
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(
    date.getDate(),
  ).padStart(2, "0")}`
}

function BookingModal({ room, onClose }: { room: string onClose: () => void }) {
  const [month, setMonth] = useState(
    () => new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  )
  const [checkIn, setCheckIn] = useState<Date | null>(null)
  const [checkOut, setCheckOut] = useState<Date | null>(null)

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose()
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [onClose])

  const days = useMemo(() => {
    const firstDay = month.getDay()
    const count = new Date(
      month.getFullYear(),
      month.getMonth() + 1,
      0,
    ).getDate()
    return [
      ...Array(firstDay).fill(null),
      ...Array.from({ length: count }, (_, i) => i + 1),
    ]
  }, [month])

  const pickDate = (day: number) => {
    const selected = new Date(month.getFullYear(), month.getMonth(), day)
    selected.setHours(0, 0, 0, 0)
    if (!checkIn || checkOut || selected < checkIn) {
      setCheckIn(selected)
      setCheckOut(null)
    } else {
      setCheckOut(selected)
    }
  }

  const isSelected = (day: number) => {
    const date = new Date(month.getFullYear(), month.getMonth(), day)
    return (
      (checkIn && date.getTime() === checkIn.getTime()) ||
      (checkOut && date.getTime() === checkOut.getTime())
    )
  }

  const isBetween = (day: number) => {
    if (!checkIn || !checkOut) return false
    const date = new Date(month.getFullYear(), month.getMonth(), day)
    return date > checkIn && date < checkOut
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-[#071c1b]/75 p-0 backdrop-blur-sm md:items-center md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="객실 예약 날짜 선택"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div className="max-h-[96vh] w-full overflow-y-auto bg-[#f4f0e8] md:max-w-3xl">
        <div className="flex items-start justify-between border-b border-[#173b37]/15 px-6 py-6 md:px-10">
          <div>
            <p className="mb-2 text-[10px] font-semibold tracking-[0.3em] text-[#a47d45]">
              RESERVATION
            </p>
            <h2 className="font-serif text-2xl text-[#173b37] md:text-3xl">
              {room}
            </h2>
          </div>
          <button
            className="grid size-10 place-items-center border border-[#173b37]/20 text-[#173b37] transition hover:bg-[#173b37] hover:text-white"
            onClick={onClose}
            aria-label="예약 창 닫기"
          >
            <Icon name="close" />
          </button>
        </div>

        <div className="grid gap-8 p-6 md:grid-cols-[0.8fr_1.2fr] md:p-10">
          <div>
            <p className="text-xs text-[#173b37]/55">선택한 일정</p>
            <div className="mt-4 border-y border-[#173b37]/15 py-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="block text-[10px] tracking-widest text-[#173b37]/50">
                    CHECK-IN
                  </span>
                  <strong className="mt-1 block font-serif text-lg font-normal text-[#173b37]">
                    {formatDate(checkIn)}
                  </strong>
                </div>
                <Icon name="arrow" className="size-4 text-[#a47d45]" />
                <div className="text-right">
                  <span className="block text-[10px] tracking-widest text-[#173b37]/50">
                    CHECK-OUT
                  </span>
                  <strong className="mt-1 block font-serif text-lg font-normal text-[#173b37]">
                    {formatDate(checkOut)}
                  </strong>
                </div>
              </div>
            </div>
            <p className="mt-4 text-xs leading-6 text-[#173b37]/55">
              체크인 날짜와 체크아웃 날짜를 차례대로 선택해 주세요.
            </p>
          </div>

          <div>
            <div className="mb-5 flex items-center justify-between">
              <button
                className="grid size-9 place-items-center border border-[#173b37]/15 transition hover:border-[#173b37]"
                onClick={() =>
                  setMonth(
                    new Date(month.getFullYear(), month.getMonth() - 1, 1),
                  )
                }
                aria-label="이전 달"
              >
                <Icon name="chevron" className="size-4 rotate-180" />
              </button>
              <strong className="font-serif text-lg font-normal text-[#173b37]">
                {month.getFullYear()}년 {month.getMonth() + 1}월
              </strong>
              <button
                className="grid size-9 place-items-center border border-[#173b37]/15 transition hover:border-[#173b37]"
                onClick={() =>
                  setMonth(
                    new Date(month.getFullYear(), month.getMonth() + 1, 1),
                  )
                }
                aria-label="다음 달"
              >
                <Icon name="chevron" className="size-4" />
              </button>
            </div>
            <div className="grid grid-cols-7 text-center">
              {weekdays.map((day) => (
                <span key={day} className="pb-3 text-[10px] text-[#173b37]/45">
                  {day}
                </span>
              ))}
              {days.map((day, index) =>
                day ? (
                  <button
                    key={`${day}-${index}`}
                    onClick={() => pickDate(day)}
                    className={`aspect-square text-xs transition ${
                      isSelected(day)
                        ? "bg-[#173b37] text-white"
                        : isBetween(day)
                          ? "bg-[#d9d2c3] text-[#173b37]"
                          : "text-[#173b37] hover:bg-[#e4ded2]"
                    }`}
                  >
                    {day}
                  </button>
                ) : (
                  <span key={`empty-${index}`} />
                ),
              )}
            </div>
          </div>
        </div>
        <button
          disabled={!checkIn || !checkOut}
          className="flex w-full items-center justify-center gap-3 bg-[#173b37] py-5 text-xs font-semibold tracking-[0.18em] text-white transition hover:bg-[#a47d45] disabled:cursor-not-allowed disabled:opacity-35"
        >
          선택한 일정으로 객실 검색
          <Icon name="arrow" className="size-4" />
        </button>
      </div>
    </div>
  )
}

function RoomDetail({
  room,
  onClose,
  onBook,
}: {
  room: Room
  onClose: () => void
  onBook: () => void
}) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose()
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[80] overflow-y-auto bg-[#f4f0e8]"
      role="dialog"
      aria-modal="true"
      aria-label={`${room.ko} 상세 보기`}
    >
      <div className="sticky top-0 z-20 border-b border-white/10 bg-[#0c2927]/95 text-white backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1480px] items-center justify-between px-6 lg:px-12">
          <div>
            <span className="block text-[9px] tracking-[0.3em] text-[#c7a46d]">
              INSIGNIA SUITE
            </span>
            <span className="mt-1 block font-serif text-sm tracking-[0.06em]">
              {room.name}
            </span>
          </div>
          <button
            className="grid size-11 place-items-center border border-white/30 transition hover:border-[#c7a46d] hover:bg-[#c7a46d] hover:text-[#173b37]"
            onClick={onClose}
            aria-label="객실 상세 닫기"
          >
            <Icon name="close" />
          </button>
        </div>
      </div>

      <div className="bg-[#102f2c] px-6 pb-6 pt-14 text-white lg:px-12 lg:pb-12 lg:pt-20">
        <div className="mx-auto max-w-[1480px]">
          <div className="mb-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.3em] text-[#c7a46d]">
                PRIVATE RESIDENCE
              </p>
              <h2 className="mt-5 font-serif text-[clamp(2.6rem,6vw,6rem)] font-light leading-[0.98] tracking-[-0.04em]">
                {room.name}
              </h2>
              <p className="mt-4 text-sm text-white/55">{room.ko}</p>
            </div>
            <p className="border-l border-white/20 pl-5 text-[10px] tracking-[0.22em] text-white/65">
              {room.info}
            </p>
          </div>

          <div className="grid gap-3">
            <div className="aspect-[4/3] overflow-hidden bg-[#23413e] md:aspect-[16/7]">
              <img
                src={room.gallery[0]}
                alt={`${room.ko} 메인 객실`}
                className="size-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {room.gallery.slice(1).map((image, index) => (
                <div
                  key={image}
                  className="aspect-square overflow-hidden bg-[#23413e] md:aspect-[16/9]"
                >
                  <img
                    src={image}
                    alt={`${room.ko} 상세 이미지 ${index + 2}`}
                    className="size-full object-cover transition duration-700 hover:scale-[1.025]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1320px] gap-14 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24 lg:px-12 lg:py-28">
        <div>
          <p className="eyebrow">THE SUITE</p>
          <h3 className="mt-7 font-serif text-4xl font-light leading-tight tracking-tight md:text-5xl">
            바다와 가장 가까운
            <br />
            하나의 <em>private retreat</em>
          </h3>
          <p className="body-copy mt-8 max-w-xl">{room.description}</p>
        </div>

        <div className="border-t border-[#173b37]/20 pt-7 lg:mt-1">
          <p className="text-[10px] font-semibold tracking-[0.25em] text-[#a47d45]">
            SUITE FEATURES
          </p>
          <ul className="mt-6 grid grid-cols-2 border-t border-[#173b37]/15">
            {room.features.map((feature, index) => (
              <li
                key={feature}
                className="flex min-h-24 items-center gap-3 border-b border-[#173b37]/15 py-5 text-sm font-light"
              >
                <span className="font-serif text-xs text-[#a47d45]">
                  0{index + 1}
                </span>
                {feature}
              </li>
            ))}
          </ul>
          <button
            onClick={onBook}
            className="mt-9 flex w-full items-center justify-between bg-[#173b37] px-7 py-5 text-xs font-semibold tracking-[0.14em] text-white transition hover:bg-[#a47d45]"
          >
            이 객실 예약하기
            <Icon name="arrow" className="size-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

function PlaceDetailPage({
  item,
  onClose,
}: {
  item: PlaceDetail
  onClose: () => void
}) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose()
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [onClose])

  const isDining = "sub" in item

  return (
    <div
      className="fixed inset-0 z-[80] overflow-y-auto bg-[#f4f0e8]"
      role="dialog"
      aria-modal="true"
      aria-label={`${"ko" in item ? item.ko : item.name} 상세 보기`}
    >
      <div className="sticky top-0 z-20 border-b border-white/10 bg-[#0c2927]/95 text-white backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1480px] items-center justify-between px-6 lg:px-12">
          <div>
            <span className="block text-[9px] tracking-[0.3em] text-[#c7a46d]">
              {isDining ? "CULINARY COLLECTION" : "SIGNATURE EXPERIENCE"}
            </span>
            <span className="mt-1 block font-serif text-sm tracking-[0.06em]">
              {item.name}
            </span>
          </div>
          <button
            className="grid size-11 place-items-center border border-white/30 transition hover:border-[#c7a46d] hover:bg-[#c7a46d] hover:text-[#173b37]"
            onClick={onClose}
            aria-label="상세 페이지 닫기"
          >
            <Icon name="close" />
          </button>
        </div>
      </div>

      <div className="bg-[#102f2c] px-6 pb-6 pt-14 text-white lg:px-12 lg:pb-12 lg:pt-20">
        <div className="mx-auto max-w-[1480px]">
          <div className="mb-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.28em] text-[#c7a46d]">
                {item.type}
              </p>
              <h2 className="mt-5 font-serif text-[clamp(2.7rem,6vw,6rem)] font-light leading-[0.98] tracking-[-0.04em]">
                {item.name}
              </h2>
              <p className="mt-4 text-sm text-white/55">
                {"sub" in item ? item.sub : item.ko}
              </p>
            </div>
            <p className="max-w-sm border-l border-white/20 pl-5 text-[10px] leading-5 tracking-[0.16em] text-white/65">
              {item.meta}
            </p>
          </div>

          <div className="grid gap-3">
            <div className="aspect-[4/3] overflow-hidden bg-[#23413e] md:aspect-[16/7]">
              <img
                src={item.gallery[0]}
                alt={`${item.name} 대표 이미지`}
                className="size-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {item.gallery.slice(1).map((image, index) => (
                <div
                  key={image}
                  className="aspect-square overflow-hidden bg-[#23413e] md:aspect-[16/9]"
                >
                  <img
                    src={image}
                    alt={`${item.name} 상세 이미지 ${index + 2}`}
                    className="size-full object-cover transition duration-700 hover:scale-[1.025]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1320px] gap-14 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24 lg:px-12 lg:py-28">
        <div>
          <p className="eyebrow">{isDining ? "THE TABLE" : "THE EXPERIENCE"}</p>
          <h3 className="mt-7 max-w-2xl font-serif text-4xl font-light leading-tight tracking-tight md:text-5xl">
            {item.detailTitle}
          </h3>
          <p className="body-copy mt-8 max-w-xl">{item.desc}</p>
        </div>

        <div className="border-t border-[#173b37]/20 pt-7 lg:mt-1">
          <p className="text-[10px] font-semibold tracking-[0.25em] text-[#a47d45]">
            {isDining ? "DINING HIGHLIGHTS" : "EXPERIENCE HIGHLIGHTS"}
          </p>
          <ul className="mt-6 grid grid-cols-2 border-t border-[#173b37]/15">
            {item.features.map((feature, index) => (
              <li
                key={feature}
                className="flex min-h-24 items-center gap-3 border-b border-[#173b37]/15 py-5 text-sm font-light"
              >
                <span className="font-serif text-xs text-[#a47d45]">
                  0{index + 1}
                </span>
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex items-center justify-between border border-[#173b37]/20 px-6 py-5">
            <span className="text-[10px] tracking-[0.2em] text-[#173b37]/55">
              FOR RESERVATIONS
            </span>
            <span className="font-serif text-sm">+82 51 000 0000</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [bookingRoom, setBookingRoom] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null)
  const [selectedPlace, setSelectedPlace] = useState<PlaceDetail | null>(null)

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 24)

    updateHeader()
    window.addEventListener("scroll", updateHeader, { passive: true })
    return () => window.removeEventListener("scroll", updateHeader)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
  }

  const openPlaceOnKey = (
    event: React.KeyboardEvent,
    item: PlaceDetail,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      setSelectedPlace(item)
    }
  }

  return (
    <main className="overflow-hidden bg-[#f4f0e8] text-[#173b37]">
      <header
        className={`fixed inset-x-0 top-0 z-40 border-b text-white transition-[background-color,border-color,box-shadow] duration-300 ${
          isScrolled
            ? "border-white/10 bg-[#0c2927]/95 shadow-[0_8px_30px_rgba(7,28,27,0.14)] backdrop-blur-md"
            : "border-white/20 bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-24 max-w-[1480px] items-center justify-between px-6 lg:px-12">
          <button
            className="text-left"
            onClick={() => scrollTo("top")}
            aria-label="홈으로 이동"
          >
            <span className="block font-serif text-xl tracking-[0.12em]">
              INSIGNIA
            </span>
            <span className="mt-0.5 block text-[8px] tracking-[0.42em] text-white/70">
              CHEONGSAPO
            </span>
          </button>
          <nav className="hidden items-center gap-9 lg:flex">
            {nav.map(([label, id]) => (
              <button
                key={label}
                onClick={() => scrollTo(id)}
                className="text-[10px] font-semibold tracking-[0.16em] text-white/80 transition hover:text-white"
              >
                {label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setBookingRoom("인시그니아 청사포")}
              className="hidden border border-white/60 px-5 py-3 text-[10px] font-semibold tracking-[0.16em] transition hover:bg-white hover:text-[#173b37] sm:block"
            >
              RESERVATION
            </button>
            <button
              className="grid size-10 place-items-center lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="메뉴 열기"
            >
              <Icon name={menuOpen ? "close" : "menu"} />
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-white/15 bg-[#0c2927]/95 px-6 py-8 backdrop-blur-md lg:hidden">
            {nav.map(([label, id]) => (
              <button
                key={label}
                onClick={() => scrollTo(id)}
                className="block w-full border-b border-white/10 py-4 text-left text-xs tracking-[0.2em]"
              >
                {label}
              </button>
            ))}
          </nav>
        )}
      </header>

      <section
        id="top"
        className="relative min-h-[max(760px,100svh)] bg-[#0b2825]"
      >
        <img
          src={images.hero}
          alt="바다를 마주한 인시그니아 청사포의 야외 수영장"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071c1b]/75 via-[#071c1b]/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071c1b]/70 via-transparent to-[#071c1b]/20" />
        <div className="relative mx-auto flex min-h-[max(760px,100svh)] max-w-[1480px] items-end px-6 pb-32 lg:px-12 lg:pb-28">
          <div className="max-w-4xl text-white">
            <p className="relative top-6 mb-9 flex items-center gap-4 text-[10px] font-semibold tracking-[0.34em] text-white/75">
              <span className="h-px w-12 bg-[#c7a46d]" />
              THE COASTAL SANCTUARY
            </p>
            <h1 className="whitespace-nowrap font-serif text-[clamp(1.55rem,7vw,6rem)] font-light leading-[0.96] tracking-[-0.035em] sm:text-[clamp(2.75rem,6vw,6rem)]">
              Beyond the horizon,
              <span className="mt-3 block italic text-[#e2d2b9]">
                a place of your own.
              </span>
            </h1>
            <p className="mt-8 max-w-lg text-sm font-light leading-7 text-white/75">
              바다와 시간이 가장 우아하게 만나는 곳.
              <br />
              청사포의 고요를 온전히 누리는 프라이빗 올 스위트 리조트.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 hidden w-[31%] items-center justify-between bg-[#f4f0e8] px-10 py-7 text-[#173b37] lg:flex">
          <span className="text-[10px] tracking-[0.25em]">
            SCROLL TO DISCOVER
          </span>
          <span className="h-px w-20 bg-[#173b37]/30" />
          <span className="font-serif text-sm italic">Cheongsapo, Busan</span>
        </div>
      </section>

      <section id="about" className="relative px-6 py-28 lg:px-12 lg:py-44">
        <div className="mx-auto grid max-w-[1320px] gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="eyebrow">INSIGNIA STORY</p>
            <p className="mt-10 font-serif text-lg italic text-[#a47d45]">
              Where sea meets serenity.
            </p>
          </div>
          <div>
            <h2 className="section-title text-[clamp(1.9rem,8.5vw,5.3rem)] sm:text-[clamp(2.6rem,5.3vw,5.3rem)]">
              머무는 모든 순간이
              <span className="block whitespace-nowrap">
                하나의 <em className="not-italic">풍경</em>이 되도록
              </span>
            </h2>
            <div className="mt-10 grid gap-8 border-t border-[#173b37]/20 pt-8 md:grid-cols-2">
              <p className="body-copy">
                청사포의 수평선과 바람, 오래된 어촌의 정취를 현대적인 건축
                언어로 담았습니다. 번잡함에서 한 걸음 떨어진 곳에서 가장 사적인
                휴식을 발견하세요.
              </p>
              <p className="body-copy">
                독립된 룸 구조의 전 객실, 넉넉한 야외 수영장과 프라이빗 인도어
                풀, 바다를 따라 이어지는 산책로가 새로운 리조트 스테이의 기준을
                제안합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="rooms" className="bg-[#102f2c] py-28 text-white lg:py-40">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-[#c7a46d]">ALL SUITE RESIDENCES</p>
              <h2 className="mt-7 font-serif text-5xl font-light tracking-tight md:text-7xl">
                Your private <em className="text-[#dcc7a6]">residence</em>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/55">
              호텔의 편안함과 리조트의 독립성을 담은 단독형 객실. 모든 공간이
              하나의 완성된 스위트입니다.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {rooms.map((room, index) => (
              <article
                key={room.name}
                className={`group cursor-pointer focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-8 focus-visible:outline-[#c7a46d] ${
                  index === 1 ? "lg:mt-24" : ""
                }`}
                onClick={() => setSelectedRoom(room)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault()
                    setSelectedRoom(room)
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`${room.ko} 상세 보기`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#23413e]">
                  <img
                    src={room.image}
                    alt={room.ko}
                    className="size-full object-cover transition duration-700 group-hover:scale-[1.035]"
                  />
                  <span className="absolute left-0 top-0 bg-[#f4f0e8] px-5 py-3 font-serif text-xs text-[#173b37]">
                    0{index + 1}
                  </span>
                  <span className="absolute bottom-0 right-0 flex items-center gap-3 bg-[#102f2c]/90 px-5 py-4 text-[9px] tracking-[0.22em] text-white backdrop-blur-sm transition group-hover:bg-[#a47d45] group-hover:text-[#173b37]">
                    VIEW SUITE
                    <Icon name="arrow" className="size-3.5" />
                  </span>
                </div>
                <div className="border-b border-white/20 py-7">
                  <p className="text-[10px] tracking-[0.24em] text-[#c7a46d]">
                    {room.info}
                  </p>
                  <div className="mt-3 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div>
                      <h3 className="font-serif text-3xl font-light">
                        {room.name}
                      </h3>
                      <p className="mt-2 text-xs text-white/50">{room.ko}</p>
                    </div>
                    <button
                      onClick={(event) => {
                        event.stopPropagation()
                        setBookingRoom(room.ko)
                      }}
                      onKeyDown={(event) => event.stopPropagation()}
                      className="group/button flex items-center gap-4 border border-white/40 px-5 py-3 text-xs transition hover:border-[#c7a46d] hover:bg-[#c7a46d] hover:text-[#173b37]"
                    >
                      <Icon name="calendar" className="size-4" />
                      객실 예약하기
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="px-6 py-28 lg:px-12 lg:py-44">
        <div className="mx-auto max-w-[1320px]">
          <div className="text-center">
            <p className="eyebrow">SIGNATURE EXPERIENCE</p>
            <h2 className="section-title mt-8">
              물과 바람이 빚은 <span className="block sm:inline">완벽한 쉼</span>
            </h2>
          </div>
          <div className="mt-20 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
            <article
              className="group relative min-h-[660px] cursor-pointer overflow-hidden focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#a47d45]"
              onClick={() => setSelectedPlace(experiences[0])}
              onKeyDown={(event) => openPlaceOnKey(event, experiences[0])}
              role="button"
              tabIndex={0}
              aria-label={`${experiences[0].ko} 상세 보기`}
            >
              <img
                src={images.outdoor}
                alt="바다 전망의 대규모 야외 수영장"
                className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071c1b]/75 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white md:p-12">
                <span className="text-[10px] tracking-[0.24em] text-[#dec59e]">
                  01 · OUTDOOR POOL
                </span>
                <h3 className="mt-3 font-serif text-4xl font-light md:text-5xl">
                  The Infinite Blue
                </h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
                  수평선과 맞닿은 광활한 수면 위로 청사포의 햇살과 노을이
                  펼쳐집니다.
                </p>
                <span className="mt-6 flex items-center gap-3 text-[9px] tracking-[0.22em] text-[#dec59e]">
                  VIEW DETAIL
                  <Icon name="arrow" className="size-3.5" />
                </span>
              </div>
            </article>
            <div className="grid gap-5">
              <article
                className="group relative min-h-[380px] cursor-pointer overflow-hidden focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#a47d45]"
                onClick={() => setSelectedPlace(experiences[1])}
                onKeyDown={(event) => openPlaceOnKey(event, experiences[1])}
                role="button"
                tabIndex={0}
                aria-label={`${experiences[1].ko} 상세 보기`}
              >
                <img
                  src={images.indoor}
                  alt="프라이빗 실내 수영장"
                  className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071c1b]/75 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                  <span className="text-[10px] tracking-[0.24em] text-[#dec59e]">
                    02 · INDOOR POOL
                  </span>
                  <h3 className="mt-3 font-serif text-3xl font-light">
                    Private Waters
                  </h3>
                  <span className="mt-5 flex items-center gap-3 text-[9px] tracking-[0.22em] text-[#dec59e]">
                    VIEW DETAIL
                    <Icon name="arrow" className="size-3.5" />
                  </span>
                </div>
              </article>
              <article
                className="flex min-h-[260px] cursor-pointer flex-col justify-between bg-[#d9d0c1] p-8 transition hover:bg-[#d1c6b5] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#a47d45]"
                onClick={() => setSelectedPlace(experiences[2])}
                onKeyDown={(event) => openPlaceOnKey(event, experiences[2])}
                role="button"
                tabIndex={0}
                aria-label={`${experiences[2].ko} 상세 보기`}
              >
                <span className="text-[10px] tracking-[0.24em] text-[#8b6939]">
                  03 · COASTAL TRAIL
                </span>
                <div>
                  <h3 className="font-serif text-3xl font-light">
                    Walk with the sea
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#173b37]/65">
                    소나무 향과 파도 소리를 따라 걷는
                    <br />
                    호텔 전용 해안 산책로.
                  </p>
                </div>
                <Icon name="arrow" className="mt-6 size-6" />
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="relative min-h-[760px]">
        <img
          src={images.gallery}
          alt="인시그니아 청사포 4층 현대 미술 갤러리"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0a2523]/35" />
        <div className="relative mx-auto flex min-h-[760px] max-w-[1480px] items-end px-6 py-20 lg:px-12 lg:py-28">
          <div className="grid w-full gap-10 border-t border-white/40 pt-8 text-white md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-[10px] tracking-[0.28em] text-white/70">
                LEVEL 4 · ART & CULTURE
              </p>
              <h2 className="mt-6 max-w-3xl font-serif text-5xl font-light leading-tight md:text-7xl">
                예술이 머무는
                <br />
                <em>또 하나의 객실</em>
              </h2>
            </div>
            <p className="max-w-sm text-[clamp(0.65625rem,2.9vw,0.875rem)] leading-6 tracking-[-0.04em] text-white/75 md:pb-2 md:text-sm md:leading-7 md:tracking-normal">
              호텔 4층 전체에 펼쳐진 대규모 갤러리. 동시대 작가들의 시선과
              청사포의 자연이 교차하는 특별한 큐레이션을 만납니다.
            </p>
          </div>
        </div>
      </section>

      <section id="dining" className="px-6 py-28 lg:px-12 lg:py-44">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <p className="eyebrow">CULINARY COLLECTION</p>
              <h2 className="section-title mt-8">
                한 끼의 기억도
                <br />
                여행이 되도록
              </h2>
            </div>
            <p className="body-copy max-w-md md:justify-self-end">
              한식부터 이탈리안, 일식 그리고 파티세리까지.
              <br className="md:hidden" />
              서로 다른 네 개의 미식 공간이 청사포에서만 가능한 맛의 장면을
              완성합니다.
            </p>
          </div>

          <div className="mt-20 grid gap-x-7 gap-y-14 md:grid-cols-2">
            {dining.map((place, index) => (
              <article
                key={place.name}
                className={`group cursor-pointer focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-8 focus-visible:outline-[#a47d45] ${
                  index % 2 ? "md:mt-20" : ""
                }`}
                onClick={() => setSelectedPlace(place)}
                onKeyDown={(event) => openPlaceOnKey(event, place)}
                role="button"
                tabIndex={0}
                aria-label={`${place.name} 상세 보기`}
              >
                <div className="relative aspect-[5/4] overflow-hidden bg-[#d5cdbf]">
                  <img
                    src={
                      place.name === "해월당"
                        ? "https://images.unsplash.com/photo-1647168585205-e56ebb24a669?auto=format&fit=crop&w=1200&q=85"
                        : place.name === "테라 에 마레"
                          ? images.haewoldang
                          : place.image
                    }
                    alt={`${place.name} 레스토랑`}
                    className="size-full object-cover transition duration-700 group-hover:scale-[1.035]"
                  />
                  <span className="absolute bottom-0 right-0 flex items-center gap-3 bg-[#102f2c]/90 px-5 py-4 text-[9px] tracking-[0.22em] text-white backdrop-blur-sm transition group-hover:bg-[#a47d45] group-hover:text-[#173b37]">
                    VIEW DETAIL
                    <Icon name="arrow" className="size-3.5" />
                  </span>
                </div>
                <div className="grid grid-cols-[auto_1fr] gap-5 border-b border-[#173b37]/20 py-6">
                  <span className="pt-1 font-serif text-xs text-[#a47d45]">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="text-[9px] tracking-[0.24em] text-[#173b37]/50">
                      {place.type}
                    </p>
                    <div className="mt-2 flex flex-wrap items-baseline gap-x-3">
                      <h3 className="font-serif text-3xl font-light">
                        {place.name}
                      </h3>
                      <span className="text-[9px] tracking-[0.2em] text-[#173b37]/50">
                        {place.sub}
                      </span>
                    </div>
                    <p className="mt-4 max-w-lg text-sm leading-7 text-[#173b37]/60">
                      {place.desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#d9d0c1] px-6 py-24 text-center lg:px-12 lg:py-32">
        <p className="eyebrow">YOUR JOURNEY BEGINS</p>
        <h2 className="mx-auto mt-8 max-w-4xl font-serif text-5xl font-light leading-tight tracking-tight md:text-7xl">
          <span className="block text-4xl md:inline md:text-6xl">가장 온전한</span>{" "}
          <span className="block text-4xl md:inline md:text-6xl">당신의 시간을</span>
          <br className="hidden md:block" />
          <em className="block text-4xl md:inline md:text-6xl">예약하세요.</em>
        </h2>
        <button
          onClick={() => setBookingRoom("인시그니아 청사포")}
          className="mx-auto mt-10 flex items-center gap-5 bg-[#173b37] px-8 py-5 text-xs font-semibold tracking-[0.16em] text-white transition hover:bg-[#a47d45]"
        >
          객실 예약하기
          <Icon name="arrow" className="size-4" />
        </button>
      </section>

      <footer className="bg-[#0d2927] px-6 py-16 text-white/65 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid gap-12 border-b border-white/15 pb-14 md:grid-cols-[1.5fr_1fr_1fr]">
            <div>
              <p className="font-serif text-2xl tracking-[0.14em] text-white">
                INSIGNIA
              </p>
              <p className="mt-1 text-[8px] tracking-[0.46em]">CHEONGSAPO</p>
              <p className="mt-8 max-w-sm text-xs leading-6">
                부산광역시 해운대구 청사포로 00
                <br />
                +82 51 000 0000 · concierge@insignia.co.kr
              </p>
            </div>
            <div>
              <p className="footer-title">DISCOVER</p>
              <div className="mt-5 space-y-3 text-xs">
                <button
                  onClick={() => scrollTo("rooms")}
                  className="block hover:text-white"
                >
                  객실
                </button>
                <button
                  onClick={() => scrollTo("dining")}
                  className="block hover:text-white"
                >
                  다이닝
                </button>
                <button
                  onClick={() => scrollTo("gallery")}
                  className="block hover:text-white"
                >
                  갤러리
                </button>
              </div>
            </div>
            <div>
              <p className="footer-title">INFORMATION</p>
              <div className="mt-5 space-y-3 text-xs">
                <p>오시는 길</p>
                <p>공지사항</p>
                <p>문의하기</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4 pt-7 text-[9px] tracking-[0.12em] text-white/35 sm:flex-row">
            <span>© 2026 INSIGNIA CHEONGSAPO. ALL RIGHTS RESERVED.</span>
            <span>PRIVACY · TERMS · LANGUAGE KR</span>
          </div>
        </div>
      </footer>

      {selectedPlace && (
        <PlaceDetailPage
          item={selectedPlace}
          onClose={() => setSelectedPlace(null)}
        />
      )}

      {selectedRoom && (
        <RoomDetail
          room={selectedRoom}
          onClose={() => setSelectedRoom(null)}
          onBook={() => {
            setSelectedRoom(null)
            setBookingRoom(selectedRoom.ko)
          }}
        />
      )}

      {bookingRoom && (
        <BookingModal room={bookingRoom} onClose={() => setBookingRoom(null)} />
      )}
    </main>
  )
}
