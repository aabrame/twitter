<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Put;
use App\Controller\IncrementTweetViewsController;
use App\Repository\TweetRepository;
use DateTime;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\InheritanceType;

#[ORM\Entity(repositoryClass: TweetRepository::class)]
#[InheritanceType('SINGLE_TABLE')]
#[ApiResource(
    order: ['date' => 'DESC'],
    operations: [
        new GetCollection(),
        new Get(),
        new Delete(),
        new Post(),
        new Put(),
        new Patch(),
        new Get(
            name: 'incrementViews',
            uriTemplate: '/tweets/{id}/views',
            controller: IncrementTweetViewsController::class
        )
    ]
)]
class Tweet
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $content = null;

    #[ORM\Column]
    private ?DateTime $date = null;

    #[ORM\Column]
    private ?int $views = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $type = null;

    #[ORM\ManyToOne(inversedBy: 'tweets')]
    private ?User $author = null;

    #[ORM\OneToMany(targetEntity: Comment::class, mappedBy: 'subject', orphanRemoval: true)]
    private Collection $comments;

    #[ORM\OneToMany(targetEntity: Repost::class, mappedBy: 'original')]
    private Collection $reposts;

    #[ORM\ManyToMany(targetEntity: User::class, mappedBy: 'liked')]
    private Collection $likes;

    public function __construct()
    {
        $this->comments = new ArrayCollection();
        $this->reposts = new ArrayCollection();
        $this->likes = new ArrayCollection();
    }

    

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(?string $content): static
    {
        $this->content = $content;

        return $this;
    }

    

    /**
     * Get the value of date
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Set the value of date
     *
     * @return  self
     */
    public function setDate($date)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get the value of views
     */
    public function getViews()
    {
        return $this->views;
    }

    /**
     * Set the value of views
     *
     * @return  self
     */
    public function setViews($views)
    {
        $this->views = $views;

        return $this;
    }

    /**
     * Get the value of type
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * Set the value of type
     *
     * @return  self
     */
    public function setType($type)
    {
        $this->type = $type;

        return $this;
    }

    public function getAuthor(): ?User
    {
        return $this->author;
    }

    public function setAuthor(?User $author): static
    {
        $this->author = $author;

        return $this;
    }

    /**
     * @return Collection<int, Comment>
     */
    public function getComments(): Collection
    {
        return $this->comments;
    }

    public function addComment(Comment $comment): static
    {
        if (!$this->comments->contains($comment)) {
            $this->comments->add($comment);
            $comment->setSubject($this);
        }

        return $this;
    }

    public function removeComment(Comment $comment): static
    {
        if ($this->comments->removeElement($comment)) {
            // set the owning side to null (unless already changed)
            if ($comment->getSubject() === $this) {
                $comment->setSubject(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Repost>
     */
    public function getReposts(): Collection
    {
        return $this->reposts;
    }

    public function addRepost(Repost $repost): static
    {
        if (!$this->reposts->contains($repost)) {
            $this->reposts->add($repost);
            $repost->setOriginal($this);
        }

        return $this;
    }

    public function removeRepost(Repost $repost): static
    {
        if ($this->reposts->removeElement($repost)) {
            // set the owning side to null (unless already changed)
            if ($repost->getOriginal() === $this) {
                $repost->setOriginal(null);
            }
        }

        return $this;
    }

    /**
     * Get the value of likes
     */ 
    public function getLikes()
    {
        return $this->likes;
    }

    public function addLike(User $user): static
    {
        if (!$this->likes->contains($user)) {
            $this->likes->add($user);
            $user->getLiked()->add($this);
        }

        return $this;
    }

    public function removeLike(User $user): static
    {
        if ($this->likes->removeElement($user)) {
            $user->getLiked()->removeElement($this);
        }

        return $this;
    }
}
