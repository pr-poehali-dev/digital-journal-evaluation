import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Student {
  id: number;
  name: string;
  class: string;
  avgGrade: number;
}

interface Grade {
  studentId: number;
  studentName: string;
  subject: string;
  grade: number;
  date: string;
}

interface Homework {
  id: number;
  title: string;
  subject: string;
  class: string;
  dueDate: string;
  status: "pending" | "submitted" | "checked";
  description: string;
}

const Index = () => {
  const [students] = useState<Student[]>([
    { id: 1, name: "Иванов Алексей", class: "9А", avgGrade: 4.5 },
    { id: 2, name: "Петрова Мария", class: "9А", avgGrade: 4.8 },
    { id: 3, name: "Сидоров Дмитрий", class: "9А", avgGrade: 4.2 },
    { id: 4, name: "Козлова Анна", class: "9Б", avgGrade: 4.9 },
    { id: 5, name: "Смирнов Иван", class: "9Б", avgGrade: 4.1 },
  ]);

  const [grades] = useState<Grade[]>([
    { studentId: 1, studentName: "Иванов Алексей", subject: "Математика", grade: 5, date: "2024-11-10" },
    { studentId: 1, studentName: "Иванов Алексей", subject: "Русский язык", grade: 4, date: "2024-11-11" },
    { studentId: 2, studentName: "Петрова Мария", subject: "Математика", grade: 5, date: "2024-11-10" },
    { studentId: 2, studentName: "Петрова Мария", subject: "История", grade: 5, date: "2024-11-12" },
    { studentId: 3, studentName: "Сидоров Дмитрий", subject: "Физика", grade: 4, date: "2024-11-09" },
  ]);

  const [homework, setHomework] = useState<Homework[]>([
    {
      id: 1,
      title: "Решить уравнения",
      subject: "Математика",
      class: "9А",
      dueDate: "2024-11-20",
      status: "pending",
      description: "Стр. 45, задания 12-18"
    },
    {
      id: 2,
      title: "Сочинение по произведению",
      subject: "Литература",
      class: "9А",
      dueDate: "2024-11-22",
      status: "submitted",
      description: "Тема: Образ героя в романе"
    },
    {
      id: 3,
      title: "Лабораторная работа",
      subject: "Физика",
      class: "9Б",
      dueDate: "2024-11-18",
      status: "checked",
      description: "Исследование силы трения"
    },
  ]);

  const [selectedClass, setSelectedClass] = useState("9А");

  const classes = ["9А", "9Б", "10А", "10Б", "11А"];
  const subjects = ["Математика", "Русский язык", "Литература", "Физика", "Химия", "История", "Биология"];

  const filteredStudents = students.filter(s => s.class === selectedClass);
  const filteredHomework = homework.filter(h => h.class === selectedClass);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "submitted": return "bg-blue-100 text-blue-800";
      case "checked": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "pending": return "Ожидается";
      case "submitted": return "Сдано";
      case "checked": return "Проверено";
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <Icon name="BookOpen" size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Электронный журнал</h1>
                <p className="text-sm text-muted-foreground">МБОУ СОШ №1</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Icon name="Bell" size={16} className="mr-2" />
                Уведомления
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="User" size={16} className="mr-2" />
                Иванова О.П.
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 animate-fade-in">
          <Card className="p-6 hover-scale">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Всего классов</p>
                <p className="text-3xl font-bold text-foreground">5</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Icon name="School" size={24} className="text-primary" />
              </div>
            </div>
          </Card>

          <Card className="p-6 hover-scale">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Учеников</p>
                <p className="text-3xl font-bold text-foreground">125</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <Icon name="Users" size={24} className="text-green-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6 hover-scale">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Ср. балл</p>
                <p className="text-3xl font-bold text-foreground">4.3</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center">
                <Icon name="TrendingUp" size={24} className="text-yellow-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6 hover-scale">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Д/З на проверке</p>
                <p className="text-3xl font-bold text-foreground">12</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                <Icon name="FileText" size={24} className="text-purple-600" />
              </div>
            </div>
          </Card>
        </div>

        <Tabs defaultValue="classes" className="w-full animate-fade-in">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="classes" className="flex items-center gap-2">
              <Icon name="School" size={16} />
              Классы
            </TabsTrigger>
            <TabsTrigger value="students" className="flex items-center gap-2">
              <Icon name="Users" size={16} />
              Ученики
            </TabsTrigger>
            <TabsTrigger value="grades" className="flex items-center gap-2">
              <Icon name="Star" size={16} />
              Оценки
            </TabsTrigger>
            <TabsTrigger value="homework" className="flex items-center gap-2">
              <Icon name="FileText" size={16} />
              Домашнее задание
            </TabsTrigger>
            <TabsTrigger value="schedule" className="flex items-center gap-2">
              <Icon name="Calendar" size={16} />
              Расписание
            </TabsTrigger>
          </TabsList>

          <TabsContent value="classes" className="space-y-4">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Список классов</h2>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Icon name="Plus" size={16} className="mr-2" />
                      Добавить класс
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Новый класс</DialogTitle>
                      <DialogDescription>Добавьте информацию о новом классе</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div>
                        <Label htmlFor="className">Название класса</Label>
                        <Input id="className" placeholder="9А" />
                      </div>
                      <div>
                        <Label htmlFor="classTeacher">Классный руководитель</Label>
                        <Input id="classTeacher" placeholder="Иванова О.П." />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button>Создать</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {classes.map((cls) => (
                  <Card key={cls} className="p-4 hover-scale cursor-pointer" onClick={() => setSelectedClass(cls)}>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold">{cls}</h3>
                      <Badge variant={selectedClass === cls ? "default" : "secondary"}>
                        {students.filter(s => s.class === cls).length} уч.
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>Ср. балл: {(students.filter(s => s.class === cls).reduce((acc, s) => acc + s.avgGrade, 0) / students.filter(s => s.class === cls).length || 0).toFixed(1)}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="students" className="space-y-4">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <h2 className="text-xl font-semibold">Ученики класса</h2>
                  <Select value={selectedClass} onValueChange={setSelectedClass}>
                    <SelectTrigger className="w-[120px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {classes.map((cls) => (
                        <SelectItem key={cls} value={cls}>{cls}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Icon name="UserPlus" size={16} className="mr-2" />
                      Добавить ученика
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Новый ученик</DialogTitle>
                      <DialogDescription>Добавьте информацию об ученике</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div>
                        <Label htmlFor="studentName">ФИО ученика</Label>
                        <Input id="studentName" placeholder="Иванов Иван Иванович" />
                      </div>
                      <div>
                        <Label htmlFor="studentClass">Класс</Label>
                        <Select>
                          <SelectTrigger id="studentClass">
                            <SelectValue placeholder="Выберите класс" />
                          </SelectTrigger>
                          <SelectContent>
                            {classes.map((cls) => (
                              <SelectItem key={cls} value={cls}>{cls}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button>Добавить</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>№</TableHead>
                    <TableHead>ФИО</TableHead>
                    <TableHead>Класс</TableHead>
                    <TableHead className="text-right">Средний балл</TableHead>
                    <TableHead className="text-right">Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredStudents.map((student, index) => (
                    <TableRow key={student.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell className="font-medium">{student.name}</TableCell>
                      <TableCell>{student.class}</TableCell>
                      <TableCell className="text-right">
                        <Badge variant={student.avgGrade >= 4.5 ? "default" : "secondary"}>
                          {student.avgGrade.toFixed(1)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <Icon name="Eye" size={16} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          <TabsContent value="grades" className="space-y-4">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Журнал оценок</h2>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Icon name="Plus" size={16} className="mr-2" />
                      Выставить оценку
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Новая оценка</DialogTitle>
                      <DialogDescription>Выставите оценку ученику</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div>
                        <Label htmlFor="gradeStudent">Ученик</Label>
                        <Select>
                          <SelectTrigger id="gradeStudent">
                            <SelectValue placeholder="Выберите ученика" />
                          </SelectTrigger>
                          <SelectContent>
                            {students.map((student) => (
                              <SelectItem key={student.id} value={student.id.toString()}>
                                {student.name} ({student.class})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="gradeSubject">Предмет</Label>
                        <Select>
                          <SelectTrigger id="gradeSubject">
                            <SelectValue placeholder="Выберите предмет" />
                          </SelectTrigger>
                          <SelectContent>
                            {subjects.map((subject) => (
                              <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="gradeValue">Оценка</Label>
                        <Select>
                          <SelectTrigger id="gradeValue">
                            <SelectValue placeholder="Выберите оценку" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5">5 (Отлично)</SelectItem>
                            <SelectItem value="4">4 (Хорошо)</SelectItem>
                            <SelectItem value="3">3 (Удовлетворительно)</SelectItem>
                            <SelectItem value="2">2 (Неудовлетворительно)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button>Сохранить</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Дата</TableHead>
                    <TableHead>Ученик</TableHead>
                    <TableHead>Предмет</TableHead>
                    <TableHead className="text-center">Оценка</TableHead>
                    <TableHead className="text-right">Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {grades.map((grade, index) => (
                    <TableRow key={index}>
                      <TableCell>{new Date(grade.date).toLocaleDateString('ru-RU')}</TableCell>
                      <TableCell className="font-medium">{grade.studentName}</TableCell>
                      <TableCell>{grade.subject}</TableCell>
                      <TableCell className="text-center">
                        <Badge variant={grade.grade >= 4 ? "default" : "destructive"}>
                          {grade.grade}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <Icon name="Edit" size={16} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          <TabsContent value="homework" className="space-y-4">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <h2 className="text-xl font-semibold">Домашние задания</h2>
                  <Select value={selectedClass} onValueChange={setSelectedClass}>
                    <SelectTrigger className="w-[120px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {classes.map((cls) => (
                        <SelectItem key={cls} value={cls}>{cls}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Icon name="Plus" size={16} className="mr-2" />
                      Добавить задание
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Новое домашнее задание</DialogTitle>
                      <DialogDescription>Создайте задание для учеников</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div>
                        <Label htmlFor="hwTitle">Название</Label>
                        <Input id="hwTitle" placeholder="Решить уравнения" />
                      </div>
                      <div>
                        <Label htmlFor="hwSubject">Предмет</Label>
                        <Select>
                          <SelectTrigger id="hwSubject">
                            <SelectValue placeholder="Выберите предмет" />
                          </SelectTrigger>
                          <SelectContent>
                            {subjects.map((subject) => (
                              <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="hwClass">Класс</Label>
                        <Select>
                          <SelectTrigger id="hwClass">
                            <SelectValue placeholder="Выберите класс" />
                          </SelectTrigger>
                          <SelectContent>
                            {classes.map((cls) => (
                              <SelectItem key={cls} value={cls}>{cls}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="hwDescription">Описание</Label>
                        <Textarea id="hwDescription" placeholder="Стр. 45, задания 12-18" />
                      </div>
                      <div>
                        <Label htmlFor="hwDueDate">Срок сдачи</Label>
                        <Input id="hwDueDate" type="date" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button>Создать</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="space-y-4">
                {filteredHomework.map((hw) => (
                  <Card key={hw.id} className="p-5 hover-scale">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold">{hw.title}</h3>
                          <Badge className={getStatusColor(hw.status)}>
                            {getStatusText(hw.status)}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Icon name="BookOpen" size={14} />
                            {hw.subject}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Calendar" size={14} />
                            {new Date(hw.dueDate).toLocaleDateString('ru-RU')}
                          </span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Icon name="MoreVertical" size={16} />
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">{hw.description}</p>
                  </Card>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-4">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">Расписание уроков</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {["Понедельник", "Вторник", "Среда", "Четверг", "Пятница"].map((day) => (
                  <Card key={day} className="p-4">
                    <h3 className="font-semibold mb-3 text-center">{day}</h3>
                    <div className="space-y-2">
                      {subjects.slice(0, 5).map((subject, index) => (
                        <div key={index} className="text-sm p-2 rounded bg-secondary">
                          <p className="font-medium">{index + 1}. {subject}</p>
                          <p className="text-xs text-muted-foreground">
                            {8 + index}:00 - {9 + index}:00
                          </p>
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
