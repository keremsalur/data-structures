// Array = [22,27,16,2,18,6]

/*
1. Soru 
Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.
1. Cevap
    1. Dizinin ikinci elemanı başlangıç elemanı olarak seçilir. (27)
    2. Daha sonra 27 ile 22 kıyas edilir. 27 > 22 olduğu için değişim yapılmaz.
    3. Şimdi de üçüncü eleman olan 16 ile 27 kontrol edilir. 16 < 27 ancak aynı zamanda 16 < 22 olduğundan 16 sayısı en başa alınır ve sayılar sırasına göre kaydırılır. Dizinin yeni hali: 16,22,27,2,18,6 olur.
    4. Bu işlemler dizinin son elemanına kadar devam eder.

2. Soru
Big O() gösterimi nedir?
2. Cevap
O(n^2)

3. Soru
Time Complexity: Dizi sıralandıktan sonra 18 sayısı aşağıdaki case'lerden hangisinin kapsamına girer? Yazınız

3. Cevap
Average case: O()
Worst case:  O()
Best case: O()
    */


function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentValue = arr[i]
      let j
      for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
        arr[j + 1] = arr[j]
      }
      arr[j + 1] = currentValue
    }
    return arr
}
