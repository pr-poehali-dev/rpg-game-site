import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Characters = () => {
  const characters = [
    {
      id: 1,
      name: 'Торвальд Железное Сердце',
      class: 'Воин',
      level: 45,
      image: 'img/759957a2-3458-423d-9396-6897abd96ea6.jpg',
      stats: { hp: 2500, mp: 800, exp: 75 },
      equipment: ['Рунический меч', 'Драконья броня', 'Щит предков'],
      achievements: 23,
      location: 'Крепость Штормов'
    },
    {
      id: 2,
      name: 'Элария Звездоплетка',
      class: 'Маг',
      level: 52,
      image: 'img/0e370dbd-938e-40b6-aee2-06cb55e03cc3.jpg',
      stats: { hp: 1200, mp: 3500, exp: 82 },
      equipment: ['Посох Вечности', 'Мантия Звёзд', 'Амулет Мудрости'],
      achievements: 31,
      location: 'Башня Магов'
    },
    {
      id: 3,
      name: 'Тень Ночного Ветра',
      class: 'Вор',
      level: 38,
      image: 'img/4382ff67-274b-4890-bd0b-e828c7f6801a.jpg',
      stats: { hp: 1800, mp: 1500, exp: 65 },
      equipment: ['Клинки Тьмы', 'Плащ Невидимости', 'Сапоги Тишины'],
      achievements: 19,
      location: 'Подземелья Города'
    }
  ];

  const getClassColor = (characterClass: string) => {
    switch (characterClass) {
      case 'Воин': return 'bg-red-500';
      case 'Маг': return 'bg-blue-500';
      case 'Вор': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-primary/20">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="fantasy-title text-5xl font-bold text-primary mb-4">
            ⚔️ Персонажи
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Управляй героями и развивай их способности в эпических приключениях
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {characters.map((character) => (
            <Card key={character.id} className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <Badge className={`${getClassColor(character.class)} text-white`}>
                    {character.class}
                  </Badge>
                  <Badge variant="outline" className="border-primary/30">
                    Уровень {character.level}
                  </Badge>
                </div>
                
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                  <img 
                    src={character.image} 
                    alt={character.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <CardTitle className="fantasy-title text-xl text-primary text-center mb-2">
                  {character.name}
                </CardTitle>
                
                <CardDescription className="text-center text-foreground/70 flex items-center justify-center">
                  <Icon name="MapPin" size={14} className="mr-1" />
                  {character.location}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10 space-y-6">
                {/* Stats */}
                <div>
                  <h4 className="font-semibold text-primary mb-3 flex items-center">
                    <Icon name="Activity" size={16} className="mr-2" />
                    Характеристики
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>HP</span>
                      <span className="text-primary font-medium">{character.stats.hp.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>MP</span>
                      <span className="text-primary font-medium">{character.stats.mp.toLocaleString()}</span>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Опыт до след. уровня</span>
                        <span className="text-primary font-medium">{character.stats.exp}%</span>
                      </div>
                      <Progress value={character.stats.exp} className="h-2" />
                    </div>
                  </div>
                </div>

                {/* Equipment */}
                <div>
                  <h4 className="font-semibold text-primary mb-3 flex items-center">
                    <Icon name="Sword" size={16} className="mr-2" />
                    Снаряжение
                  </h4>
                  <div className="space-y-1">
                    {character.equipment.map((item, index) => (
                      <div key={index} className="text-sm text-foreground/80 flex items-center">
                        <Icon name="Dot" size={12} className="mr-1 text-primary" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="pt-2 border-t border-primary/20">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground/70 flex items-center">
                      <Icon name="Trophy" size={14} className="mr-1" />
                      Достижения:
                    </span>
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      {character.achievements}
                    </Badge>
                  </div>
                </div>

                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon name="Eye" size={16} className="mr-2" />
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Character Creation */}
        <div className="text-center">
          <Card className="max-w-md mx-auto bg-card/80 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="fantasy-title text-2xl text-primary">
                Создать Персонажа
              </CardTitle>
              <CardDescription>
                Начни новое приключение с уникальным героем
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" className="w-full">
                <Icon name="Plus" size={20} className="mr-2" />
                Создать Героя
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Characters;