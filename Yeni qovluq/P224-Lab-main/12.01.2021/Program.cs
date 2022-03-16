using System;

namespace _12._01._2021
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(Test("Salam", 'b'));
            Console.WriteLine(CountSpaces("Hello"));
            Console.WriteLine(Calculator(5,'/',2));
        }

        static int CountSpaces(string word)
        {
            int count = 0;
            foreach (char item in word)
            {
                if (item==' ')
                {
                    count++;
                }
            }
            return count;
        }

        static double Calculator(double a, char op,double b)
        {
            double result = 0;
            switch (op)
            {
                case '+':
                    result = a + b;
                    break;
                case '-':
                    result = a - b;
                    break;
                case '*':
                    result = a * b;
                    break;
                case '/':
                    result = a / b;
                    break;
                case '%':
                    result = a % b;
                    break;
                default:
                    break;
            }
            return result;
        }

        static bool Test(string word,char a)
        {
            foreach (char item in word)
            {
                if (item==a)
                {
                    return true;
                }
            }
            return false;
        }

        // Parametr olaraq 1 string qebul eliyen method yazin.
        // Bu method stringdeki boshluqlarin sayini qaytarmalidir
    }
}
