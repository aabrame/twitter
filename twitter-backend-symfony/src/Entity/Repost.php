<?php

namespace App\Entity;

use App\Repository\RepostRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: RepostRepository::class)]
class Repost extends Tweet
{
    #[ORM\ManyToOne(inversedBy: 'reposts')]
    private ?Tweet $original = null;

    public function getOriginal(): ?Tweet
    {
        return $this->original;
    }

    public function setOriginal(?Tweet $original): static
    {
        $this->original = $original;

        return $this;
    }
}
