Arrays are static
let arr=new Array(10);
Why array index starts from zero(0)??
  -because we add the index in memory allocation.
  -let arr[3]=20; internally it works like
  - arr[3]= arr + (index + size);
  -       = 1000 + (3+4)
          =1012
this is how it works
