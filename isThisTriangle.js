function isTriangle(a,b,c)
{ if ((a + b <= c || b + c <= a || a + c <= b) || (a < 1 || b < 1 || c < 1)) {
   return false;
} else {
  return true;
  }
}