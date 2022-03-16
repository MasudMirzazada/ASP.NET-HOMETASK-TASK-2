using _12._17._2021.Extensions;
using System;
using System.Text;

namespace _12._17._2021
{
    class Program
    {
        static void Main(string[] args)
        {
            // int-e reqemlerinin sayini qaytaran extension yazin
            Console.WriteLine(1234.DigitCounter());
            // string-e uzunlugunun 7den boyuk olub olmadigini yoxlayan extension yazin
            Console.WriteLine("12345678A".Check());
            //char.IsUpper()
            Console.WriteLine("Hello".CustomReplace('l', 'b'));
            StringBuilder sb = new StringBuilder("a");
            sb.Append(1);
            Console.WriteLine(sb);
        }
    }
}
