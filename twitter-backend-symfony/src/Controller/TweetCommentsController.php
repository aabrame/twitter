<?php

namespace App\Controller;

use App\Entity\Comment;
use App\Repository\TweetRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class TweetCommentsController extends AbstractController
{

    public function __construct(
        private TweetRepository $tweetRepository
    ) {
    }

    public function __invoke(string $id)
    {
        $tweet = $this->tweetRepository->find($id);
        return $tweet->getComments();
    }
}
