











# Um sistesma para uma pizzaria
# Desensolvido por Cintia, Kauan, Italo e Juliana
print("--------------------------")
print("     TURMA DO FUNDÃO")
print("A melhor pizza do bairro")
print("--------------------------")

# escolher o tamanho da pizza P, M ou G
print("ESCOLHA O TAMANHO DA PIZZA")
print("[1] PIZZA PEQUENA  R$ 19,90 ")
print("[2] PIZZA MÉDIA    R$ 25,90 ")
print("[3] PIZZA GRANDE   R$ 35,90 ")
print("--------------------------")
tamanho_pizza = int(input("Digite uma opção: "))
valor_pizza = 0
quantidade_pizza = int(input("Qual a quantidade: "))

print("--------------------------")

# estrutura que recebe o tamanho da pizza
if tamanho_pizza == 1:
    tamanho_pizza = ("P")
    valor_pizza = 19.90

elif tamanho_pizza == 2:
    tamanho_pizza = ("M")
    valor_pizza = 25.90
else:
    tamanho_pizza = ("G")
    valor_pizza = 35.90

# Escolha do sabor da pizza
print("ESCOLHA O SABOR DA PIZZA")
print("[1] - CALABREZA")
print("[2] - FRANGO")
print("[3] - A MODA")
print("--------------------------")
sabor_pizza = int(input("Digite uma opção: "))
print("--------------------------")

# estrutura que recebe o sabor da pizza
if sabor_pizza == 1:
    sabor_pizza = ("CALABREZA")
elif sabor_pizza == 2:
    sabor_pizza = ("FRANGO")
else:
    sabor_pizza = ("A MODA")

#Bebidas
print("ESCOLHA O SABOR DA BEBIDA")
print("[1] COCA-COLA      R$ 8,50")
print("[2] GUARANÁ        R$ 7,50")
print("[3] SUCO MARACUJÁ  R$ 8,00")
print("--------------------------")
sabor_bebida = int(input("Digite uma opção: "))
print("--------------------------")

# estrutura que recebe a bebida
if sabor_bebida == 1:
    sabor_bebida = ("COCA-COLA")
    valor_bebida = 8.50
elif sabor_bebida == 2:
    sabor_bebida = ("GUARANÁ")
    valor_bebida = 7.50
else:
    sabor_bebida = ("SUCO MARACUJÁ")
    valor_bebida = 8.00

# estrutura de soma
total = valor_pizza + valor_bebida

print(f" CONFIRME O PEDIDO ")
print(f"PIZZA {sabor_pizza}  R${valor_pizza}")
print(f"TAMANHO: {tamanho_pizza}.")
print(f"BEBIDA: {sabor_bebida} - R${valor_bebida}")
print(f"TOTAL: {total} ")
    