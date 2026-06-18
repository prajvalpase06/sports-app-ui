export const teams = [
  {
    id: 1,
    name: 'Manchester City',
    logo: '🔵',
    country: 'England',
    established: 1880,
    badge: 'MC'
  },
  {
    id: 2,
    name: 'Liverpool',
    logo: '🔴',
    country: 'England',
    established: 1892,
    badge: 'LIV'
  },
  {
    id: 3,
    name: 'Real Madrid',
    logo: '⚪',
    country: 'Spain',
    established: 1902,
    badge: 'RM'
  },
  {
    id: 4,
    name: 'Barcelona',
    logo: '🔵🔴',
    country: 'Spain',
    established: 1899,
    badge: 'FCB'
  },
  {
    id: 5,
    name: 'Bayern Munich',
    logo: '🔴',
    country: 'Germany',
    established: 1900,
    badge: 'FCB'
  },
  {
    id: 6,
    name: 'Paris Saint-Germain',
    logo: '🔵',
    country: 'France',
    established: 1970,
    badge: 'PSG'
  }
];

export const fixtures = [
  {
    id: 1,
    homeTeam: 'Manchester City',
    awayTeam: 'Liverpool',
    homeTeamBadge: 'MC',
    awayTeamBadge: 'LIV',
    date: '2026-06-22',
    time: '20:00',
    league: 'Premier League',
    status: 'upcoming',
    homeScore: null,
    awayScore: null
  },
  {
    id: 2,
    homeTeam: 'Real Madrid',
    awayTeam: 'Barcelona',
    homeTeamBadge: 'RM',
    awayTeamBadge: 'FCB',
    date: '2026-06-23',
    time: '21:00',
    league: 'La Liga',
    status: 'upcoming',
    homeScore: null,
    awayScore: null
  },
  {
    id: 3,
    homeTeam: 'Bayern Munich',
    awayTeam: 'Dortmund',
    homeTeamBadge: 'FCB',
    awayTeamBadge: 'BVB',
    date: '2026-06-20',
    time: '19:30',
    league: 'Bundesliga',
    status: 'live',
    homeScore: 2,
    awayScore: 1
  },
  {
    id: 4,
    homeTeam: 'PSG',
    awayTeam: 'Marseille',
    homeTeamBadge: 'PSG',
    awayTeamBadge: 'OM',
    date: '2026-06-19',
    time: '20:45',
    league: 'Ligue 1',
    status: 'completed',
    homeScore: 3,
    awayScore: 0
  },
  {
    id: 5,
    homeTeam: 'Milan',
    awayTeam: 'Inter',
    homeTeamBadge: 'AC',
    awayTeamBadge: 'INT',
    date: '2026-06-24',
    time: '20:00',
    league: 'Serie A',
    status: 'upcoming',
    homeScore: null,
    awayScore: null
  }
];

export const leagues = [
  {
    id: 1,
    name: 'Premier League',
    country: 'England',
    color: '#3D195B',
    accentColor: '#37003C',
    logo: '🏆'
  },
  {
    id: 2,
    name: 'La Liga',
    country: 'Spain',
    color: '#4B0082',
    accentColor: '#2A004D',
    logo: '⚽'
  },
  {
    id: 3,
    name: 'Bundesliga',
    country: 'Germany',
    color: '#E30613',
    accentColor: '#8B0000',
    logo: '🇩🇪'
  },
  {
    id: 4,
    name: 'Serie A',
    country: 'Italy',
    color: '#00539B',
    accentColor: '#003A70',
    logo: '🇮🇹'
  },
  {
    id: 5,
    name: 'Ligue 1',
    country: 'France',
    color: '#004687',
    accentColor: '#002D57',
    logo: '🇫🇷'
  },
  {
    id: 6,
    name: 'Champions League',
    country: 'Europe',
    color: '#001A4D',
    accentColor: '#000F2E',
    logo: '👑'
  }
];

export const standings = [
  {
    position: 1,
    team: 'Manchester City',
    badge: 'MC',
    played: 30,
    won: 24,
    drawn: 4,
    lost: 2,
    goalsFor: 82,
    goalsAgainst: 29,
    goalDifference: 53,
    points: 76
  },
  {
    position: 2,
    team: 'Liverpool',
    badge: 'LIV',
    played: 30,
    won: 22,
    drawn: 5,
    lost: 3,
    goalsFor: 78,
    goalsAgainst: 32,
    goalDifference: 46,
    points: 71
  },
  {
    position: 3,
    team: 'Arsenal',
    badge: 'ARS',
    played: 30,
    won: 21,
    drawn: 4,
    lost: 5,
    goalsFor: 75,
    goalsAgainst: 38,
    goalDifference: 37,
    points: 67
  },
  {
    position: 4,
    team: 'Aston Villa',
    badge: 'AVL',
    played: 30,
    won: 19,
    drawn: 3,
    lost: 8,
    goalsFor: 67,
    goalsAgainst: 45,
    goalDifference: 22,
    points: 60
  },
  {
    position: 5,
    team: 'Chelsea',
    badge: 'CHE',
    played: 30,
    won: 17,
    drawn: 4,
    lost: 9,
    goalsFor: 61,
    goalsAgainst: 52,
    goalDifference: 9,
    points: 55
  }
];

export const news = [
  {
    id: 1,
    title: 'Manchester City wins record-breaking 4th consecutive Premier League title',
    excerpt: 'Pep Guardiola\'s side secures dominance with a stunning display of football',
    image: '🏆',
    date: '2026-06-18',
    category: 'Premier League',
    source: 'Sky Sports'
  },
  {
    id: 2,
    title: 'Mbappe set to join Real Madrid in historic transfer',
    excerpt: 'French superstar completes move to Spanish giants in record deal',
    image: '⭐',
    date: '2026-06-17',
    category: 'Transfer News',
    source: 'ESPN'
  },
  {
    id: 3,
    title: 'Liverpool secures Champions League final spot',
    excerpt: 'The Reds advance with a dramatic comeback victory',
    image: '🏅',
    date: '2026-06-16',
    category: 'Champions League',
    source: 'BBC Sport'
  },
  {
    id: 4,
    title: 'Barcelona resurrects squad with youth academy takeover',
    excerpt: 'La Masia academy continues its legacy with fresh talent',
    image: '📰',
    date: '2026-06-15',
    category: 'La Liga',
    source: 'Marca'
  },
  {
    id: 5,
    title: 'Bayern Munich extends record Bundesliga winning streak',
    excerpt: 'Bavaria dominance continues in German football',
    image: '🇩🇪',
    date: '2026-06-14',
    category: 'Bundesliga',
    source: 'Kicker'
  }
];

export const favoriteTeams = [
  {
    id: 1,
    name: 'Manchester City',
    badge: 'MC',
    logo: '🔵',
    nextFixture: {
      opponent: 'Liverpool',
      date: '2026-06-22',
      type: 'home'
    }
  },
  {
    id: 3,
    name: 'Real Madrid',
    badge: 'RM',
    logo: '⚪',
    nextFixture: {
      opponent: 'Barcelona',
      date: '2026-06-23',
      type: 'home'
    }
  },
  {
    id: 5,
    name: 'Bayern Munich',
    badge: 'FCB',
    logo: '🔴',
    nextFixture: {
      opponent: 'Dortmund',
      date: '2026-06-20',
      type: 'away'
    }
  }
];
