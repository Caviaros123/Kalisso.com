<?php

namespace App\Mail;

use App\Order;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Profile;

class OrderPlaced extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $order;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Order $order)
    {
        $this->order = $order;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {

       // $seller_email = Profile::where('email',$this->billing_email);
        return $this->to($this->order->billing_email, $this->order->billing_name)
                    ->bcc('support@kalisso.com')
                    ->subject('kalisso.com')
                    ->markdown('emails.orders.placed');
    }
}
