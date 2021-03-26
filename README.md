# Email Manager
A bare-bones Django component for general-purpose email management. Includes a React-based web interface for frontend demonstration (API).

## Setup
From the package root directory, sequentially run these two:
```sh
pip install .
npm i
```

In the Django project directory, the one with the manage.py file, create and apply migrations:
```sh
python manage.py makemigrations
python manage.py migrate
```

Run the Django dev server:
```sh
python manage.py runserver
```

Build the React frontend from the package root:
```sh
npm run dev
```

For production:
```sh
npm run build
```

Test the email manager with the React frontend on http://localhost:8000.