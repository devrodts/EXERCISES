package basic_arithmetic.sum;
import java.util.Scanner;

public class Sum{


    public int SumNumbers(){  
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the first number: ");
        int firstNumber = scanner.nextInt();

        System.out.print("Enter the second number: ");
        int secondNumber = scanner.nextInt();

        int sum = firstNumber + secondNumber;
        System.out.println("The sum of " + firstNumber + " and " + secondNumber + " is: " + sum);
        scanner.close();
        return sum;
    }

    public static void main(String[] args){
        Sum sum = new Sum();
        sum.SumNumbers();
        System.out.println("Sum method executed successfully.");
    }
}