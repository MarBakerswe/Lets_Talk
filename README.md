# AI Voice Assistant

This project is an AI-generated voice assistant, inspired by popular voice assistants like Siri and Alexa. Utilizing the powerful APIs from [play.ht](https://play.ht/) for voice generation and [OpenAI](https://www.openai.com/) for natural language processing, this assistant aims to provide an interactive and intuitive experience for users.

## Features

- **Voice Generation**: Leverages the play.ht API to generate lifelike human voices in response to user queries.
- **Advanced NLP**: Uses OpenAI's state-of-the-art models to understand and process user inputs, ensuring relevant responses.

## Getting Started

### Prerequisites

- Node.js and npm installed.
- API keys for play.ht and OpenAI.

### Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/MarBakerswe/lets_talk.git
    ```

2. Navigate to the frontend directory and install frontend dependencies:
    ```bash
    cd lets_talk/frontend
    npm install
    ```

3. Navigate to the backend directory and install backend dependencies (if you have any):
    ```bash
    cd ../backend
    npm install
    ```

(Note: Adjust the above commands based on how your backend is set up and if there are any additional steps required for the backend.)

4. Create a `.env` file in the appropriate directory (frontend/backend or root, based on where you need it) and add your API keys:
    ```
    PLAYHT_API_KEY=your_playht_api_key
    OPENAI_API_KEY=your_openai_api_key
    ```

5. Start the application:
    ```bash
    # For frontend
    cd ../frontend
    npm start

    # For backend (if applicable)
    cd ../backend
    npm start
    ```

(Note: Adjust the start commands based on how your applications are set up, especially if you're using tools like `concurrently` to run both simultaneously.)

The application should now be running locally, and you can interact with the voice assistant.

## Contributing

Feel free to submit issues and pull requests, all contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgements

- [play.ht](https://play.ht/) for their voice generation API.
- [OpenAI](https://www.openai.com/) for their top-notch natural language processing models.
