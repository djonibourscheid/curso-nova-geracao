package aula7;

public class TestaLacos {
  public static void main(String[] args) {
    for (int i = 1; i <= 10; i++) {
      System.out.println("A tabuado do " + i);

      for (int j = 1; j <= 10; j++) {
        System.out.println(i + " x " + j + "=" + i * j);
      }

      System.out.println("-------");
    }
  }
}
