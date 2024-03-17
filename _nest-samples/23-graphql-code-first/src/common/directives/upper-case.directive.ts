import { getDirective, MapperKind, mapSchema } from "@graphql-tools/utils";
import { defaultFieldResolver, GraphQLSchema } from "graphql";

export function upperDirectiveTransformer(
  schema: GraphQLSchema,
  directiveName: string,
) {
  return mapSchema(schema, {
    [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
      const upperDirective = getDirective(
        schema,
        fieldConfig,
        directiveName,
      )?.[0];

      if (upperDirective) {
        // получение функции разрешения поля
        const { resolve = defaultFieldResolver } = fieldConfig;

        // Replace the original resolver with a function that *first* calls
        // the original resolver, then converts its result to upper case
        
        // добавляем функцию разрешения поля 
        fieldConfig.resolve = async function (source, args, context, info) {
          // получение результата
          const result = await resolve(source, args, context, info);
          // результат переводим в верхний регистр
          if (typeof result === "string") {
            return result.toUpperCase();
          }
          return result;
        };

        // возвращаем новые настройки для поля
        return fieldConfig;
      }
    },
  });
}
