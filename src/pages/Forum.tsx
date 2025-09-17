import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Forum = () => {
  const forumCategories = [
    {
      id: 1,
      name: 'Общие Обсуждения',
      description: 'Общение игроков, новости и объявления',
      topics: 1247,
      messages: 15643,
      lastPost: '2 минуты назад',
      icon: 'MessageSquare',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      name: 'Гайды и Стратегии',
      description: 'Полезные советы и руководства по игре',
      topics: 892,
      messages: 12450,
      lastPost: '15 минут назад',
      icon: 'BookOpen',
      color: 'bg-green-500'
    },
    {
      id: 3,
      name: 'Классы Персонажей',
      description: 'Обсуждение билдов, скиллов и тактик',
      topics: 567,
      messages: 8930,
      lastPost: '1 час назад',
      icon: 'Users',
      color: 'bg-purple-500'
    },
    {
      id: 4,
      name: 'Торговля',
      description: 'Покупка, продажа и обмен предметами',
      topics: 334,
      messages: 5643,
      lastPost: '3 часа назад',
      icon: 'Coins',
      color: 'bg-yellow-500'
    },
    {
      id: 5,
      name: 'Баги и Предложения',
      description: 'Сообщения об ошибках и идеи улучшений',
      topics: 198,
      messages: 2847,
      lastPost: '5 часов назад',
      icon: 'Bug',
      color: 'bg-red-500'
    }
  ];

  const recentTopics = [
    {
      id: 1,
      title: 'Лучший билд для мага в новом обновлении',
      author: 'Элария_Звездоплетка',
      category: 'Классы Персонажей',
      replies: 23,
      views: 456,
      lastReply: '10 минут назад',
      isPinned: true
    },
    {
      id: 2,
      title: 'Ищу команду для рейда на Драконью Пещеру',
      author: 'Торвальд_Железное_Сердце',
      category: 'Общие Обсуждения',
      replies: 15,
      views: 234,
      lastReply: '25 минут назад',
      isHot: true
    },
    {
      id: 3,
      title: 'Продаю легендарный меч +15',
      author: 'Тень_Ночного_Ветра',
      category: 'Торговля',
      replies: 8,
      views: 189,
      lastReply: '1 час назад',
      isNew: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-primary/20">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="fantasy-title text-5xl font-bold text-primary mb-4">
            💬 Форум
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Общайся с игроками, делись опытом и находи союзников для приключений
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button size="lg">
            <Icon name="PlusCircle" size={20} className="mr-2" />
            Создать Тему
          </Button>
          <Button variant="outline" size="lg" className="border-primary/30">
            <Icon name="Search" size={20} className="mr-2" />
            Поиск
          </Button>
          <Button variant="outline" size="lg" className="border-primary/30">
            <Icon name="TrendingUp" size={20} className="mr-2" />
            Популярное
          </Button>
        </div>

        {/* Forum Categories */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {forumCategories.map((category) => (
            <Card key={category.id} className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardHeader className="relative z-10">
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`p-2 rounded-lg ${category.color} text-white`}>
                    <Icon name={category.icon} size={20} />
                  </div>
                  <CardTitle className="text-xl text-primary">
                    {category.name}
                  </CardTitle>
                </div>
                
                <CardDescription className="text-foreground/70">
                  {category.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{category.topics.toLocaleString()}</div>
                    <div className="text-xs text-foreground/70">Тем</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{category.messages.toLocaleString()}</div>
                    <div className="text-xs text-foreground/70">Сообщений</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-foreground/80">{category.lastPost}</div>
                    <div className="text-xs text-foreground/70">Последний пост</div>
                  </div>
                </div>

                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon name="ArrowRight" size={16} className="mr-2" />
                  Перейти в раздел
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Topics */}
        <div>
          <h2 className="fantasy-title text-3xl font-bold text-primary mb-8 text-center">
            🔥 Активные Темы
          </h2>
          
          <div className="space-y-4">
            {recentTopics.map((topic) => (
              <Card key={topic.id} className="group bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        {topic.isPinned && (
                          <Badge className="bg-red-500 text-white text-xs">
                            <Icon name="Pin" size={12} className="mr-1" />
                            Закреплено
                          </Badge>
                        )}
                        {topic.isHot && (
                          <Badge className="bg-orange-500 text-white text-xs">
                            <Icon name="Flame" size={12} className="mr-1" />
                            Горячее
                          </Badge>
                        )}
                        {topic.isNew && (
                          <Badge className="bg-green-500 text-white text-xs">
                            <Icon name="Sparkles" size={12} className="mr-1" />
                            Новое
                          </Badge>
                        )}
                        <Badge variant="outline" className="text-xs border-primary/30">
                          {topic.category}
                        </Badge>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                        {topic.title}
                      </h3>
                      
                      <div className="flex items-center space-x-4 text-sm text-foreground/70">
                        <div className="flex items-center">
                          <Icon name="User" size={14} className="mr-1" />
                          {topic.author}
                        </div>
                        <div className="flex items-center">
                          <Icon name="MessageSquare" size={14} className="mr-1" />
                          {topic.replies} ответов
                        </div>
                        <div className="flex items-center">
                          <Icon name="Eye" size={14} className="mr-1" />
                          {topic.views} просмотров
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right text-sm text-foreground/70">
                      <div>Последний ответ:</div>
                      <div className="font-medium">{topic.lastReply}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
              <Icon name="MoreHorizontal" size={20} className="mr-2" />
              Показать Больше Тем
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;