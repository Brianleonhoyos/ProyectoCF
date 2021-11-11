const int F = 2;
const int C = 2;

int filas[] = {3,4};
int columnas[] = {5,6};

int matriz[F][C];

void setup() {
  for (int i = 0; i < F; i++){
    pinMode(filas[i],INPUT);
  }
  for (int i = 0; i < C; i++){
    pinMode(columnas[i],INPUT);
  }
  Serial.begin(9600);
} 

void leerMatriz(){
  for (int i = 0; i < F; i++){
    pinMode(filas[i],OUTPUT);
    digitalWrite(filas[i],LOW);
    for (int j = 0; j < C; j++){
      pinMode(columnas[j],INPUT_PULLUP);
      matriz[i][j] = digitalRead(columnas[j]);
      pinMode(columnas[j],INPUT);
    }
    pinMode(filas[i],INPUT);
  }
}

void loop() {
  leerMatriz();
  //Serial.println();
  for (int i = 0; i < F; i++){
    for (int j = 0; j < C; j++){
      //Serial.print("Matriz completa: \n");  
      //Serial.print(matriz[i][j]);
      Serial.println(String(matriz[0][0])+" "+String(matriz[0][1])+" "+String(matriz[1][0])+" "+String(matriz[1][1]));
      //Serial.println(int(matriz[0][0]));
      //Serial.print(matriz[0][1]);
      //Serial.print(matriz[1][0]);
      //Serial.print(matriz[1][1]);
      //Serial.println(" ");
    }
    //Serial.println(" ");
  }
  delay(500);
}
