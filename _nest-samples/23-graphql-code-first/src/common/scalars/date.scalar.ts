import { CustomScalar, Scalar } from "@nestjs/graphql";
import { Kind, ValueNode } from "graphql";

@Scalar("Date", (type) => Date)
export class DateScalar implements CustomScalar<number, Date> {
  description = "Date custom scalar type";

  // это приходит с клиента
  parseValue(value: number): Date {
    return new Date(value); // value from the client
  }

  // это отправляется клиенту
  serialize(value: Date): number {
    return value.getTime(); // value sent to the client
  }

  parseLiteral(ast: ValueNode): Date {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value);
    }
    return null;
  }
}
