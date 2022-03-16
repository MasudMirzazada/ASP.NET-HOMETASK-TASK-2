using System;
using System.Collections.Generic;
using System.Text;

namespace _12._17._2021.Extensions
{
    static class Extension
    {
        public static int DigitCounter(this int num)
        {
            int counter = 0;
            while (num > 0)
            {
                counter++;
                num /= 10;
            }
            return counter;
        }

        public static bool Check(this string str)
        {
            bool result = false;
            foreach (char item in str)
            {
                if (char.IsUpper(item))
                {
                    result = true;
                    break;
                }
            }
            if (str.Length > 7 && result)
            {
                return true;
            }
            return false;
        }

        public static string CustomReplace(this string str,char c1,char c2)
        {
            StringBuilder sb = new StringBuilder(str);
            for (int i = 0; i < sb.Length; i++)
            {
                if (sb[i]==c1)
                {
                    sb[i] = c2;
                }
            }
            return sb.ToString();
        }
    }
}
