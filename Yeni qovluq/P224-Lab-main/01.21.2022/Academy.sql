create database Academy
use Academy

create table Groups
(
Id int primary key identity,
[Name] nvarchar(10) unique
)

create table Students
(
Id int primary key identity,
[Name] nvarchar(20),
Surname nvarchar(20),
GroupId int references Groups(Id)
)

Alter table Students
Add Grade int

Insert into Groups values
('P224'),
('P124')

Insert into Students values
('Metin','Agayev',1,90),
('Ferid','Aliyev',2,70),
('Sadiqxan','Qayxanov',2,60),
('Sexavet','Aliyev',2,100)

select * from students where GroupId=2

select Groups.Name, Count(*) 'Telebe Sayi' from Groups
join Students
on Groups.Id = Students.GroupId
Group by Groups.Name

--7. View yaratmaq - tələbə adını, qrup adını-qrup kimi , tələbə soyadını, tələbənin balı göstərməli
Create view usv_GetStudents
as
select s.Name,g.Name 'Group Name',Surname, Grade from Students s
join Groups g
on s.GroupId=g.id

select * from usv_GetStudents

Create procedure usp_GetGrade(@Grade int)
As
Begin
Select * from Students
where Grade>@Grade
End

exec usp_GetGrade 80
