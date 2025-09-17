import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const characterClasses = [
    {
      id: 1,
      name: 'Воин',
      description: 'Могучий защитник с тяжёлыми доспехами и мечом',
      image: 'img/759957a2-3458-423d-9396-6897abd96ea6.jpg',
      stats: {
        strength: 95,
        magic: 20,
        agility: 40,
        defense: 90
      },
      abilities: ['Удар щитом', 'Боевой клич', 'Защитная стойка', 'Ярость берсерка'],
      primaryStat: 'Сила',
      difficulty: 'Новичок'
    },
    {
      id: 2,
      name: 'Маг',
      description: 'Повелитель стихий и заклинаний древней магии',
      image: 'img/0e370dbd-938e-40b6-aee2-06cb55e03cc3.jpg',
      stats: {
        strength: 25,
        magic: 95,
        agility: 35,
        defense: 30
      },
      abilities: ['Огненный шар', 'Ледяная броня', 'Телепортация', 'Метеорит'],
      primaryStat: 'Магия',
      difficulty: 'Эксперт'
    },
    {
      id: 3,
      name: 'Вор',
      description: 'Мастер скрытности и точных ударов из тени',
      image: 'img/4382ff67-274b-4890-bd0b-e828c7f6801a.jpg',
      stats: {
        strength: 55,
        magic: 40,
        agility: 90,
        defense: 45
      },
      abilities: ['Удар в спину', 'Невидимость', 'Отравленный клинок', 'Акробатика'],
      primaryStat: 'Ловкость',
      difficulty: 'Продвинутый'
    }
  ];

  const navigationSections = [
    { name: 'Главная', icon: 'Home', active: true },
    { name: 'Игры', icon: 'Gamepad2' },
    { name: 'Персонажи', icon: 'Users' },
    { name: 'Мир', icon: 'Globe' },
    { name: 'Гильдии', icon: 'Shield' },
    { name: 'Форум', icon: 'MessageSquare' }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Новичок': return 'bg-green-500';
      case 'Продвинутый': return 'bg-yellow-500';
      case 'Эксперт': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-primary/20">
      {/* Header */}
      <header className="border-b border-primary/20 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="fantasy-title text-3xl font-bold text-primary">
              ⚔️ Fantasy Realm RPG
            </h1>
            <nav className="hidden md:flex space-x-6">
              {navigationSections.map((section) => (
                <button
                  key={section.name}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    section.active 
                      ? 'bg-primary text-primary-foreground shadow-lg' 
                      : 'text-foreground/70 hover:text-foreground hover:bg-primary/10'
                  }`}
                >
                  <Icon name={section.icon} size={18} />
                  <span>{section.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="fantasy-title text-5xl md:text-7xl font-bold text-primary mb-6">
          Войди в Мир Магии
        </h2>
        <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
          Выбери свой путь в мистическом фэнтези мире, где каждое решение формирует твою судьбу
        </p>
        <Button size="lg" className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300">
          <Icon name="PlayCircle" size={24} className="mr-2" />
          Начать Приключение
        </Button>
      </section>

      {/* Character Classes */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h3 className="fantasy-title text-4xl font-bold text-primary mb-4">
            Классы Персонажей
          </h3>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Каждый класс обладает уникальными способностями и стилем игры
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {characterClasses.map((characterClass) => (
            <Card key={characterClass.id} className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="fantasy-title text-2xl text-primary">
                    {characterClass.name}
                  </CardTitle>
                  <Badge className={`${getDifficultyColor(characterClass.difficulty)} text-white`}>
                    {characterClass.difficulty}
                  </Badge>
                </div>
                
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                  <img 
                    src={characterClass.image} 
                    alt={characterClass.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <CardDescription className="text-center text-foreground/70">
                  {characterClass.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10 space-y-6">
                {/* Stats */}
                <div>
                  <h4 className="font-semibold text-primary mb-3 flex items-center">
                    <Icon name="BarChart" size={16} className="mr-2" />
                    Характеристики
                  </h4>
                  <div className="space-y-3">
                    {Object.entries(characterClass.stats).map(([stat, value]) => (
                      <div key={stat}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="capitalize text-foreground/80">
                            {stat === 'strength' ? 'Сила' : 
                             stat === 'magic' ? 'Магия' :
                             stat === 'agility' ? 'Ловкость' : 'Защита'}
                          </span>
                          <span className="text-primary font-medium">{value}%</span>
                        </div>
                        <Progress value={value} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Abilities */}
                <div>
                  <h4 className="font-semibold text-primary mb-3 flex items-center">
                    <Icon name="Zap" size={16} className="mr-2" />
                    Способности
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {characterClass.abilities.map((ability, index) => (
                      <Badge key={index} variant="outline" className="text-xs py-1 text-center border-primary/30 text-foreground/80">
                        {ability}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Primary Stat */}
                <div className="pt-2 border-t border-primary/20">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground/70">Основная характеристика:</span>
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      {characterClass.primaryStat}
                    </Badge>
                  </div>
                </div>

                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon name="User" size={16} className="mr-2" />
                  Выбрать Класс
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15k+</div>
              <div className="text-foreground/70">Активных игроков</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-foreground/70">Квестов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-foreground/70">Локаций</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-foreground/70">Онлайн</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20 bg-card/30 py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="fantasy-title text-2xl font-bold text-primary mb-4">
            ⚔️ Fantasy Realm RPG
          </div>
          <p className="text-foreground/60">
            © 2024 Fantasy Realm. Все права защищены магией.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;