create database Task

use Task

create table Advisor(
Advisor_ID int primary key identity,
Advisor_Name nvarchar(100) not null,
[Address] nvarchar(100))

create table Student(
Student_ID int primary key identity,
Student_Name nvarchar(100) not null,
Student_Surname nvarchar(100),
GPA int check(GPA>80),
S_Advisor_ID int references Advisor(Advisor_ID))

Alter Table Advisor
Add Advisor_Surname nvarchar(100)

Exec sp_rename 'Student.GPA','Student_GPA'

Alter Table Student
Drop Constraint CK__Student__GPA__267ABA7A

ALTER table Advisor ALTER COLUMN Address nvarchar(25)

alter table Student drop column Student_GPA

EXEC sp_rename 'Student', 'Students'

insert into Advisor values ('Amil', 'Nuriyev', 'Ortaligdan' )

update Advisor set Advisor_Surname = 'Nuriyev' where Advisor_Surname = 'Ortaligdan'

insert into Students values ('Chinara', 'Ibadova',1),('Gunel', 'Novruzova',1)

delete from Students  where Student_Id=1 or Student_Id=2

alter table Advisor
alter column address nvarchar(100) not null

alter table Students
alter column Student_Name nvarchar(100)