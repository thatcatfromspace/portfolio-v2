import React from 'react'

const Code = () => {
  return (
    <div>
      <code>
        <pre>

Problem sheet 7

               ;Program 1
               
               
PRINT_MSG MACRO ARRAY
    MOV DX,OFFSET ARRAY
    MOV AH,09H
    INT 21H
ENDM



GET_BINARY MACRO ARRAY
        LOCAL INPUT,RESET,END_INPUT
    MOV CX,16D
    MOV DI,OFFSET ARRAY
    INPUT:
        CMP CX,00H
        JZ END_INPUT
        MOV AH,01H
        INT 21H
        
        DEC CX
        SUB AL,30H
        CMP AL,01H
        JA RESET
        
        STOSB
        JMP INPUT
    RESET:
        INC CX
        MOV DL,08H
        MOV AH,02H
        INT 21H
        MOV DL,00H
        INT 21H
        MOV DL,08H
        INT 21H
        JMP INPUT
    END_INPUT:
        DEC DI
        MOV SI,DI
ENDM


ORG 100H

PRINT_MSG MSG1
GET_BINARY BINARY_NUMBER

MOV SI,OFFSET BINARY_NUMBER
MOV CX,0FH
LODSB
FIND_PARITY:
    MOV AH,AL
    LODSB
    XOR AL,AH
LOOP FIND_PARITY
MOV BL,AL


PRINT_MSG MSG3
MOV DL,BL
ADD DL,30H
MOV AH,02H
INT 21H

PRINT_MSG MSG2
MOV AH,02H
MOV DL,BL
XOR DL,01H
ADD DL,30H
INT 21H

HLT

MSG1 DB 'Enter the Binary Number [16-bit] : $'
MSG2 DB 0DH,0AH,'The ODD Parity Bit : $'
MSG3 DB 0DH,0AH,'The EVEN Parity Bit : $'
BINARY_NUMBER DB 16 DUP(48D)












            ;Program 3




;PRINT_MSG MACRO ARRAY
;    MOV DX,OFFSET ARRAY
;    MOV AH,09H
;    INT 21H
;ENDM
;
;GET_BINARY MACRO ARRAY
;        LOCAL INPUT,RESET,END_INPUT
;    MOV CX,08H
;    MOV DI,OFFSET ARRAY
;    INPUT:
;        CMP CX,00H
;        JZ END_INPUT
;        MOV AH,01H
;        INT 21H
;        
;        DEC CX
;        SUB AL,30H
;        CMP AL,01H
;        JA RESET
;        
;        STOSB
;        JMP INPUT
;    RESET:
;        INC CX
;        MOV DL,08H
;        MOV AH,02H
;        INT 21H
;        MOV DL,00H
;        INT 21H
;        MOV DL,08H
;        INT 21H
;        JMP INPUT
;    END_INPUT:
;        DEC DI
;        MOV SI,DI
;ENDM
;
;ORG 100H
;
;PRINT_MSG MSG1
;GET_BINARY BINARY_ARRAY
;
;MOV BX,01H
;MOV CX,08H
;MOV AX,00H
;MOV DI,OFFSET NUMBER
;PUSH AX
;CONVERT_BINARY:
;
;    CMP CX,04H
;    JZ UPDATE_FACTOR
;    RETURN:
;
;    MOV AX,00H
;    MOV AL,[SI]
;    DEC SI
;    MUL BX
;    
;    ADD [DI],AL
;    
;    MOV AX,BX
;    MOV BX,02H
;    MUL BX
;    MOV BX,AX
;LOOP CONVERT_BINARY 
;JMP FIX_DECIMAL
;
;UPDATE_FACTOR:
;    MOV BX,01H
;    INC DI
;    JMP RETURN
;
;FIX_DECIMAL:
;    MOV AH,[DI]
;    SUB AH,30H
;    DEC DI
;    MOV AL,[DI]
;    SUB AL,30H
;    AAD
;
;CONVERT_HEX:
;    MOV BX,10H
;    MOV CX,02H
;    MOV SI,OFFSET HEX_NUMBER
;    
;    HEX_LOOP:
;        DIV BL
;        MOV [SI],AH
;        INC SI
;    LOOP HEX_LOOP
;
;PRINT_HEX:
;    PRINT_MSG MSG2
;    DEC SI
;    MOV AX,00H
;    MOV CX,02H
;    PRINT_HEX_LOOP:
;        MOV AL,[SI]
;        
;        CMP AL,09H
;        JA PRINT_OTHER
;        ADD AL,30H
;        RETURN_PRINT_HEX:
;        MOV AH,02H
;        
;        MOV DL,AL
;        INT 21H
;        DEC SI
;    LOOP PRINT_HEX_LOOP
;    JMP EXIT
;        
;PRINT_OTHER:
;    ADD AL,55D
;    JMP RETURN_PRINT_HEX
;EXIT:
;    HLT
;
;MSG1 DB 'Enter the BCD Value : $'
;MSG2 DB 0DH,0AH,'The Hexa-Decimal Value of the given BCD : $'
;BINARY_ARRAY DB 8 DUP(48)
;NUMBER DB 2 DUP(48)
;HEX_NUMBER DB 4 DUP(48)





            ;Program 2
            



;PRINT_MSG MACRO ARRAY
;    MOV DX,OFFSET ARRAY
;    MOV AH,09H
;    INT 21H
;ENDM
;
;GET_BINARY MACRO ARRAY
;        LOCAL INPUT,RESET,END_INPUT
;    MOV CX,08H
;    MOV DI,OFFSET ARRAY
;    INPUT:
;        CMP CX,00H
;        JZ END_INPUT
;        MOV AH,01H
;        INT 21H
;        
;        DEC CX
;        SUB AL,30H
;        CMP AL,01H
;        JA RESET
;        
;        STOSB
;        JMP INPUT
;    RESET:
;        INC CX
;        MOV DL,08H
;        MOV AH,02H
;        INT 21H
;        MOV DL,00H
;        INT 21H
;        MOV DL,08H
;        INT 21H
;        JMP INPUT
;    END_INPUT:
;        DEC DI
;        MOV SI,DI
;ENDM
;           
;            
;
;ORG 100H
;
;PRINT_MSG MSG1
;GET_BINARY BINARY_CODE
;
;MOV CX,07H
;MOV SI,OFFSET BINARY_CODE
;MOV DI,OFFSET GRAY_CODE
;MOV AL,[SI]
;MOV [DI],AL
;INC DI
;CALCULATE_GRAY_CODE:
;    LODSB
;    MOV AH,[SI]
;    XOR AL,AH
;    STOSB
;LOOP CALCULATE_GRAY_CODE
;
;PRINT_MSG MSG2
;MOV SI,OFFSET GRAY_CODE
;MOV AX,00H
;MOV CX,08H
;PRINT_GRAY_CODE:
;    LODSB
;    MOV DL,AL
;    ADD DL,30H
;    MOV AH,02H
;    INT 21H
;LOOP PRINT_GRAY_CODE
;
;HLT
;
;MSG1 DB 'Enter The Binary Coded Decimal Value : $'
;MSG2 DB 0DH,0AH,'The Gray Code of the Binary Coded Decimal : $'
;BINARY_CODE DB 8 DUP(48D)
;GRAY_CODE DB 8 DUP(48D)





                ;Program 4


PRINT_MSG MACRO ADDRESS
    MOV DX,OFFSET ADDRESS
    MOV AH,09H
    INT 21H
ENDM


PRINT_BINARY MACRO NUMBER,ADDRESS
        LOCAL FIND_BINARY
    MOV AL,NUMBER
    MOV BL,02H
    MOV CX,04H
    MOV DI,ADDRESS
    FIND_BINARY:
        DIV BL
        MOV [DI],AH
        INC DI
    LOOP FIND_BINARY
ENDM
           

GET_HEX MACRO ADDRESS
        LOCAL INPUT
    MOV DI,OFFSET ADDRESS
    MOV CX,02H
    INPUT:
        CMP CX,00H
        JZ TERMINATE
        MOV AH,01H
        INT 21H
        
        DEC CX
        
        CMP AL,'f'
        JA NON_ALPHA_NUMERIC
        CMP AL,'a'
        JAE ALPHA_NUMERIC
        CMP AL,'F'
        JA NON_ALPHA_NUMERIC
        CMP AL,'A'
        JAE ALPHA_NUMERIC
        CMP AL,'9'
        JA NON_ALPHA_NUMERIC
        CMP AL,'0'
        JAE ALPHA_NUMERIC
        JMP NON_ALPHA_NUMERIC
        
        RETURN_POINT:
        STOSB
        JMP INPUT
    NON_ALPHA_NUMERIC:
        INC CX
        MOV DL,08H
        MOV AH,02H
        INT 21H
        
        MOV DL,00H
        INT 21H
        
        MOV DL,08H
        INT 21H
        
        JMP INPUT
    ALPHA_NUMERIC:
        SUB AL,30H
        CMP AL,09H
        JA ALPHABET
        JMP RETURN_POINT
    ALPHABET:
        SUB AL,07H
        JMP RETURN_POINT
    TERMINATE:
ENDM



                
ORG 100H

PRINT_MSG MSG1
GET_HEX HEX_ARRAY

MOV DI,OFFSET BCD_ARRAY
MOV CX,02H

MOV SI,OFFSET HEX_ARRAY
MOV AH,[SI]
MOV AL,[SI+01H]

PUSH AX

PRINT_BINARY AL,DI
POP BX
PRINT_BINARY BH,DI

PRINT_MSG MSG2
DEC DI
MOV CX,08H
PRINT:
    MOV DL,[DI]
    DEC DI
    ADD DL,30H
    MOV AH,02H
    INT 21H
LOOP PRINT

HLT

MSG1 DB 'Enter a Hexa-Decimal Number : $'
MSG2 DB 0DH,0AH,'The Binary Coded Decimal of the Given Hexa-Decimal Number : $'
HEX_ARRAY DB 2 DUP(48D)
BCD_ARRAY DB 8 DUP(48D)


PROBLEM SHEET 5 

INCLUDE 'emu8086.inc'



;ORG 100H
;
;;Printing the message 1
;LEA DX,MSG1
;MOV AH,09H
;INT 21H
;
;;Getting the first string from the user
;LEA DX,STRING1
;;MOV SI,DX
;MOV AH,0AH
;INT 21H
;
;;Printing the message 2
;LEA DX,MSG2
;MOV AH,09H
;INT 21H
;
;;Getting the second string from the user
;LEA DX,STRING2
;MOV AH,0AH
;INT 21H
;
;
;MOV CX,00H
;
;;Pasting the first string to the new string
;LEA DI,CONCATENATED_STRING
;LEA DX,STRING1
;MOV CL,[STRING1+01]
;ADD DX,02H
;MOV SI,DX
;
;REP MOVSB
;
;;Pasting the second string to the new string
;LEA DX,STRING2
;MOV CL,[STRING2+01]
;ADD DX,02H
;MOV SI,DX
;
;REP MOVSB
;
;;placing the NULL character at the end of the concatenated string
;
;MOV [DI],'$'
;
;;printing the concatenated string
;LEA DX,MSG3
;MOV AH,09H
;INT 21H
;LEA DX,CONCATENATED_STRING
;INT 21H
;
;HLT
;
;MSG1 DB 'Enter String 1 : ','$'
;MSG2 DB 0DH,0AH,'Enter String 2 : ','$'
;MSG3 DB 0DH,0AH,'The Concatenation of the two strings is : ','$'
;STRING1 DB 100 DUP(48)
;STRING2 DB 100 DUP(48)
;CONCATENATED_STRING DB 200 DUP(48)




        ;PROGRAM 2





ORG 100H

LEA DX,MSG1
MOV AH,09H
INT 21H

LEA DX,STRING
MOV AH,0AH
INT 21H

LEA SI,STRING
ADD SI,01H
MOV AX,00H
MOV AL,[STRING+01]
ADD SI,AX
LEA DI,REVERSED_STRING
ADD DI,02H

MOV CX,AX
THE_LOOP:
    MOV AL,[SI]
    MOV [DI],AL
    DEC SI
    INC DI
LOOP THE_LOOP
MOV [DI],'$'

LEA DX,MSG2
MOV AH,09H
INT 21H

LEA DX,REVERSED_STRING
ADD DX,02H
MOV AH,09H
INT 21H
    
HLT

MSG1 DB 'Enter a string : ','$'
MSG2 DB 0DH,0AH,'The Reversed String : ','$'
STRING DB 100 DUP(48)
REVERSED_STRING DB 100 DUP(48)




            ;PROGRAM 3
           



;ORG 100H            
;
;LEA DI,ARRAY
;LEA DX,STATEMENT1
;MOV AH,09H
;INT 21H
;MOV CX,00H
;
;;Print the Message 1
;LEA DX,MSG1
;INT 21H
;
;;Get Number 1
;MOV AH,01H
;INT 21H
;SUB AL,48
;INC CL
;STOSB
;
;;Print the Message 2
;LEA DX,MSG2
;MOV AH,09H
;INT 21H
;
;;Get Number 2
;MOV AH,01H
;INT 21H
;SUB AL,48
;INC CL
;STOSB
;
;;Print the Message 3
;LEA DX,MSG3
;MOV AH,09H
;INT 21H
;
;;Get Number 3
;MOV AH,01H
;INT 21H
;SUB AL,48
;INC CL
;STOSB
;
;;Print the Message 4
;LEA DX,MSG4
;MOV AH,09H
;INT 21H
;
;;Get Number 4
;MOV AH,01H
;INT 21H
;SUB AL,48
;INC CL
;STOSB
;
;;Print the Message 5
;LEA DX,MSG5
;MOV AH,09H
;INT 21H
;
;;Get Number 5
;MOV AH,01H
;INT 21H
;SUB AL,48
;INC CL
;STOSB
;
;DEC CL
;LEA SI,ARRAY
;MOV AH,[SI]
;INC SI
;
;THE_LOOP:
;    CMP CL,00H
;    JZ EXIT
;    LODSB
;    DEC CL
;    CMP AL,AH
;    JA UPDATE
;    JMP THE_LOOP
;
;UPDATE:
;    MOV AH,AL
;    JMP THE_LOOP
;EXIT:
;    MOV BL,AH
;    ;Printing the message
;    LEA DX,STATEMENT2
;    MOV AH,09h
;    int 21h
;    
;    ;Converting the number to normal printing format
;    MOV AL,BL
;    ADD AL,48
;    
;    ;Printing the number
;    MOV DL,AL
;    MOV AH,02H
;    INT 21H
;    HLT
;
;
;STATEMENT1 DB 0DH,0AH,'Dear User, You have to Enter 5 numbers $'
;MSG1 DB 0DH,0AH,0AH,' Enter your number 1 : $'
;MSG2 DB 0DH,0AH,' Enter your number 2 : $'
;MSG3 DB 0DH,0AH,' Enter your number 3 : $'
;MSG4 DB 0DH,0AH,' Enter your number 4 : $'
;MSG5 DB 0DH,0AH,' Enter your number 5 : $'
;STATEMENT2 DB 0DH,0AH,0AH,'The Maximum of the given numbers : $'
;ARRAY DB 100 DUP(48)






        ;PROGRAM 4
       
       
       
ORG 100H

LEA DX,MSG1
MOV AH,09H
INT 21H


MOV DI,OFFSET FOUR_DIGIT_NUMBER
MOV CX,04H
GET_NUM:
    MOV AH,01H
    INT 21H
    SUB AL,48D
    STOSB
LOOP GET_NUM



LEA SI,FOUR_DIGIT_NUMBER
LEA DI,SINGLE_NUMBER
MOV CX,04H
MOV BX,1000

MOV AX,00H
SUM:
    LODSB
    MUL BX
    ADD [DI],AX
    ;MOV AX,[DI]
   
    MOV AX,BX
    MOV BL,10D
    DIV BL
    MOV BX,AX
LOOP SUM

LEA BX,SINGLE_NUMBER
MOV AX,[BX]

MOV CX,07H
DIV CX

LEA DI,QUOTIENT
STOSW
LEA DI,REMAINDER
MOV AX,DX
STOSW
MOV BX,AX


CMP DX,00H
JZ TRUE
JNZ FALSE

TRUE:
    LEA DX,MSG2
    MOV AH,09H
    INT 21H
    JMP EXIT
FALSE:
    LEA DX,MSG3
    MOV AH,09H
    INT 21H
    JMP EXIT
EXIT:
   
    ;Printing the Message 4
    LEA DX,MSG4
    MOV AH,09H
    INT 21H
   
    LEA SI,QUOTIENT
    LODSW
    CALL PRINT_NUM
   
    ;Printing the Message 5
    LEA DX,MSG5
    MOV AH,09H
    INT 21H
   
    ;Printing the Remainder
    LEA SI,REMAINDER
    LODSW
    MOV DX,AX
    ADD DX,48D
    MOV AH,02H
    INT 21H
   
    HLT

MSG1 DB 'Enter a 4-digit number : $'
MSG2 DB 0DH,0AH,'The given number is divisible by 7$'
MSG3 DB 0DH,0AH,'The given number is NOT divisible by 7$'
MSG4 DB 0DH,0AH,'The Quotient : $'
MSG5 DB 0DH,0AH,'The Remainder : $'
QUOTIENT DB 4 DUP(0)
REMAINDER DB 4 DUP(0)
FOUR_DIGIT_NUMBER DB 6 DUP(48)
SINGLE_NUMBER DB 8 DUP(0)
DEFINE_PRINT_NUM
DEFINE_PRINT_NUM_UNS
 





        ;PROGRAM 5
        
        
;ORG 100H
;
;LEA DX,STATEMENT1
;MOV AH,09H
;INT 21H          
;
;;Printing Message 1
;LEA DX,MSG1
;MOV AH,09H
;INT 21H
;
;LEA DI,NUMBER_ARRAY 
;
;;Getting Number 1 from the user
;MOV CL,10D
;MOV AH,01H
;INT 21H
;SUB AL,48D
;MOV AH,00H
;MUL CL
;MOV BX,AX
;MOV AH,01H
;INT 21H
;SUB AL,48D
;ADD AL,BL
;
;STOSB
;
;;Printing Message 2
;LEA DX,MSG2
;MOV AH,09H
;INT 21H
;
;;Getting Number 2 from the user
;MOV CL,10D
;MOV AH,01H
;INT 21H
;SUB AL,48D
;MOV AH,00H
;MUL CL
;MOV BX,AX
;MOV AH,01H
;INT 21H
;SUB AL,48D
;ADD AL,BL
;
;STOSB
;
;;Printing Message 3
;LEA DX,MSG3
;MOV AH,09H
;INT 21H
;
;;Getting Number 3 from the user
;MOV CL,10D
;MOV AH,01H
;INT 21H
;SUB AL,48D
;MOV AH,00H
;MUL CL
;MOV BX,AX
;MOV AH,01H
;INT 21H
;SUB AL,48D
;ADD AL,BL
;
;STOSB
;
;MOV CX,03H
;MOV SI,OFFSET NUMBER_ARRAY
;MOV AH,[SI]
;INC SI
;CHECK_MAX:
;    LODSB
;    CMP CL,00H
;    JZ PRINT_RESULT
;    DEC CL
;    CMP AL,AH
;    JA UPDATE
;    JMP CHECK_MAX
;UPDATE:
;    MOV AH,AL
;    JMP CHECK_MAX
;PRINT_RESULT:
;    MOV AL,AH
;    AAM
;    MOV BX,AX
;    LEA DX,MSG4
;    MOV AH,09H
;    INT 21H
;    
;    MOV DL,BH
;    ADD DL,48D
;    MOV AH,02H
;    INT 21H
;    
;    MOV DL,BL
;    ADD DL,48D
;    INT 21H    
;    
;HLT
;
;STATEMENT1 DB 'Dear User You have to enter 3 numbers$'
;MSG1 DB 0DH,0AH,'Enter Number 1 : $'
;MSG2 DB 0DH,0AH,'Enter Number 2 : $'
;MSG3 DB 0DH,0AH,'Enter Number 3 : $'
;MSG4 DB 0DH,0AH,0AH,'The Maximum of the Given 3 Numbers : $'
;NUMBER_ARRAY DB 6 DUP(0)
        </pre>
      </code>
    </div>
  )
}

export default Code
