<?php

namespace App\Controller;

use App\Entity\Tweet;
use App\Repository\TweetRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\Routing\Annotation\Route;

#[AsController]
class IncrementTweetViewsController extends AbstractController
{
    public function __construct(
        private TweetRepository $tweetRepository,
        private EntityManagerInterface $entityManager
    ) {}

    public function __invoke(string $id): void
    {
        // retrieve tweet from DB
        $tweet = $this->tweetRepository->find($id);
        // increment tweet.views
        $tweet->setViews($tweet->getViews()+1);
        // save to DB
        $this->entityManager->flush();
    }
}
