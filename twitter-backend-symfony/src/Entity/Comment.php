<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\CommentRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CommentRepository::class)]
class Comment extends Tweet
{
    #[ORM\ManyToOne(inversedBy: 'comments')]
    #[ORM\JoinColumn(nullable: true)]
    private ?Tweet $subject = null;

    public function getSubject(): ?Tweet
    {
        return $this->subject;
    }

    public function setSubject(?Tweet $subject): static
    {
        $this->subject = $subject;

        return $this;
    }
}
