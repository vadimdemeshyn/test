/**
 * Created by vadimdemeshyn on 15.02.16.
 */
public class Test {




    public static void result(){
        for (int i=1;i<11;i++){
            int j=i;
            int sum = 0;
            while (j>0){
                sum+=j;
                j--;
            }
            System.out.println(sum);
        }



    }

    public static void main(String[] args)
    {

        result();

    }
}


