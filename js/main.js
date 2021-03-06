/**
 * Boolzapp Vue
 */

// data
var app = new Vue({
    el: '#app',
    data: {
        newAccess: '',
        // nostro account
        user: {
            name: 'Pietra Alfonsa',
            avatar: '_io'
        },
        indexChat: 0,
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        newMessage: '',
        newFilter: '',

    },

    methods: {
        // set active chat
        setChat(index) {
            this.indexChat = index;
            this.newMessage = '';
        },

        // chatting
        addMessage(index) {
            if (this.newMessage.trim() !== '') {
                // console.log(this.newMessage);
                this.contacts[this.indexChat].messages.push(
                        {
                        date: dayjs().format('DD/MM/YYYY HH:mm'),
                        message: this.newMessage,
                        status: 'sent'
                        },
                );
                this.newMessage = '';
                // const that = this;
                // risposta
                setTimeout(() => { 
                    this.contacts[this.indexChat].messages.push(
                        {
                            date: dayjs().format('DD/MM/YYYY HH:mm'),
                            message: 'Ok',
                            status: 'received'
                        },
                    );
                    this.newAccess = dayjs().format('HH:mm DD/MM/YYYY');
                    console.log(this.newAccess);
                }, 1500);
            }
        },

        // filter
        filter() {
            this.contacts.forEach((element) => {
                if ( ! element.name.toLowerCase().includes(this.newFilter.toLowerCase())) {
                    element.visible = false;
                    console.log(element.visible);
                }
                else {
                    element.visible = true;
                    console.log(element.visible);
                }
            });
        }
    }
});