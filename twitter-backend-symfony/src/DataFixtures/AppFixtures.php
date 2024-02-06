<?php

namespace App\DataFixtures;

use App\Entity\Tweet;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create();
        for ($i = 0; $i < 20; $i++) {
            $user = new User();
            $user->setName($faker->name());
            $user->setEmail($faker->email());
            $user->setPassword($faker->password());
            $user->setType("CLIENT");
            $manager->persist($user);
        }
        for ($i = 0; $i < 20; $i++) {
            $tweet = new Tweet();
            $tweet->setContent($faker->text());
            $tweet->setDate($faker->dateTimeThisMonth());
            $tweet->setViews($faker->numberBetween(0, 100));
            $tweet->setType("TWEET");
            $manager->persist($tweet);
        }
        $manager->flush();
    }
}
