import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Games = () => {
  const games = [
    {
      id: 1,
      title: 'Война Драконов',
      description: 'Эпическая MMORPG с массовыми PvP сражениями',
      image: 'img/759957a2-3458-423d-9396-6897abd96ea6.jpg',
      players: '15,000+',
      status: 'Онлайн',
      genre: 'MMORPG',
      difficulty: 'Высокая'
    },
    {
      id: 2,
      title: 'Тайны Магии',
      description: 'Приключенческая RPG с глубокой системой заклинаний',
      image: 'img/0e370dbd-938e-40b6-aee2-06cb55e03cc3.jpg',
      players: '8,500+',
      status: 'Онлайн',
      genre: 'RPG',
      difficulty: 'Средняя'
    },
    {
      id: 3,
      title: 'Гильдия Воров',
      description: 'Стелс-экшен в мире средневекового подполья',
      image: 'img/4382ff67-274b-4890-bd0b-e828c7f6801a.jpg',
      players: '5,200+',
      status: 'Онлайн',
      genre: 'Стелс',
      difficulty: 'Экспертная'
    }
  ];

  const getStatusColor = (status: string) => {
    return status === 'Онлайн' ? 'bg-green-500' : 'bg-red-500';
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Средняя': return 'bg-yellow-500';
      case 'Высокая': return 'bg-orange-500';
      case 'Экспертная': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-primary/20">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="fantasy-title text-5xl font-bold text-primary mb-4">
            🎮 Игровые Миры
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Выбери своё приключение из множества захватывающих RPG миров
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {games.map((game) => (
            <Card key={game.id} className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardHeader className="relative z-10">
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="fantasy-title text-2xl text-primary">
                    {game.title}
                  </CardTitle>
                  <Badge className={`${getStatusColor(game.status)} text-white`}>
                    {game.status}
                  </Badge>
                </div>
                
                <CardDescription className="text-foreground/70 mb-4">
                  {game.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Icon name="Users" size={16} />
                    <span className="text-sm text-foreground/70">{game.players} игроков</span>
                  </div>
                  <Badge variant="outline" className="border-primary/30">
                    {game.genre}
                  </Badge>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground/70">Сложность:</span>
                  <Badge className={`${getDifficultyColor(game.difficulty)} text-white text-xs`}>
                    {game.difficulty}
                  </Badge>
                </div>

                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon name="PlayCircle" size={16} className="mr-2" />
                  Играть
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Popular Categories */}
        <div className="text-center mb-8">
          <h2 className="fantasy-title text-3xl font-bold text-primary mb-8">
            Популярные Категории
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['MMORPG', 'RPG', 'Стелс', 'Экшен'].map((category) => (
              <Button key={category} variant="outline" className="h-16 text-lg border-primary/30 hover:bg-primary/10">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;