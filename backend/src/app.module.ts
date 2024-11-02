import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // Aqui configuramos o MongoDB com a URI de conexão
    MongooseModule.forRoot('mongodb://mongo:27017/nome_do_banco'),
  ],
  controllers: [], // Adicione controladores aqui depois
  providers: [], // Adicione serviços aqui depois
})
export class AppModule {}
