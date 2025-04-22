package avarage;

public class Average {
 
    public double CalculateAverage(int n1, int n2,  int n3){
        double average = (n1 + n2 + n3) / 3.0;
        System.out.println("The average of " + n1 + ", " + n2 + ", and " + n3 + " is: " + average);
        return average;
    }

    public static void main(String[] args) {
        Average average = new Average();
        average.CalculateAverage(10, 20, 30);
        System.out.println("Average method executed successfully.");

        // Create an instance of CalculateAverage with an array of numbers
        int[] numbers = {10, 20, 30};
        Average.CalculateAverage calculateAverage = new Average.CalculateAverage(numbers);
        double result = calculateAverage.calculate();
        System.out.println("The average of the array is: " + result);
        System.out.println("CalculateAverage method executed successfully.");

    }


    private static class CalculateAverage{
        private int[] numbers = {10, 20, 30};

        CalculateAverage(int[] numbers) {
            this.numbers = numbers;
        }

        public double calculate() {
            double sum = 0;
            for (int number : numbers) {
                sum += number;
            }
            return sum / numbers.length;
        }

    }
}
