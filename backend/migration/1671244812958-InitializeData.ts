import { Logger } from "@nestjs/common"
import { MigrationInterface, QueryRunner } from "typeorm"
export class InitializeData1671244812958 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.manager.createQueryBuilder().insert().into('product').values({
                name: 'Small Pizza',
                description: "10' pizza for one person",
                sku: "sku001",
                retailPrice: 11.99
            }).execute()

            await queryRunner.manager.createQueryBuilder().insert().into('product').values({
                name: 'Medium Pizza',
                description: "12' pizza for two person",
                sku: "sku002",
                retailPrice: 15.99
            }).execute()

            await queryRunner.manager.createQueryBuilder().insert().into('product').values({
                name: 'Large Pizza',
                description: "15' pizza for two person",
                sku: "sku003",
                retailPrice: 21.99
            }).execute()

            await queryRunner.manager.createQueryBuilder().insert().into('customer').values({
                name: 'Amazon',
            }).execute()

            await queryRunner.manager.createQueryBuilder().insert().into('customer').values({
                name: 'Microsoft',
            }).execute()
        } catch (err) {
            Logger.error(err);
            throw err;
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.createQueryBuilder().delete().from('customer').execute();
        await queryRunner.manager.createQueryBuilder().delete().from('product').execute();
    }

}
