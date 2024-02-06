<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240206131232 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE tweet (id INT AUTO_INCREMENT NOT NULL, content VARCHAR(255) DEFAULT NULL, date DATETIME NOT NULL, views INT NOT NULL, type VARCHAR(255) DEFAULT NULL, author_id INT DEFAULT NULL, dtype VARCHAR(255) NOT NULL, original_id INT DEFAULT NULL, subject_id INT DEFAULT NULL, INDEX IDX_3D660A3BF675F31B (author_id), INDEX IDX_3D660A3B108B7592 (original_id), INDEX IDX_3D660A3B23EDC87 (subject_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, type VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('CREATE TABLE user_tweet (user_id INT NOT NULL, tweet_id INT NOT NULL, INDEX IDX_DFA4F163A76ED395 (user_id), INDEX IDX_DFA4F1631041E39B (tweet_id), PRIMARY KEY(user_id, tweet_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE tweet ADD CONSTRAINT FK_3D660A3BF675F31B FOREIGN KEY (author_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE tweet ADD CONSTRAINT FK_3D660A3B108B7592 FOREIGN KEY (original_id) REFERENCES tweet (id)');
        $this->addSql('ALTER TABLE tweet ADD CONSTRAINT FK_3D660A3B23EDC87 FOREIGN KEY (subject_id) REFERENCES tweet (id)');
        $this->addSql('ALTER TABLE user_tweet ADD CONSTRAINT FK_DFA4F163A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_tweet ADD CONSTRAINT FK_DFA4F1631041E39B FOREIGN KEY (tweet_id) REFERENCES tweet (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE tweet DROP FOREIGN KEY FK_3D660A3BF675F31B');
        $this->addSql('ALTER TABLE tweet DROP FOREIGN KEY FK_3D660A3B108B7592');
        $this->addSql('ALTER TABLE tweet DROP FOREIGN KEY FK_3D660A3B23EDC87');
        $this->addSql('ALTER TABLE user_tweet DROP FOREIGN KEY FK_DFA4F163A76ED395');
        $this->addSql('ALTER TABLE user_tweet DROP FOREIGN KEY FK_DFA4F1631041E39B');
        $this->addSql('DROP TABLE tweet');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE user_tweet');
    }
}
