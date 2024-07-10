import docker
client = docker.from_env()
# client.containers.run("ubuntu:latest", "echo hello world")
image = client.images.build(path='.', dockerfile='Dockerfile', tag='my-first_image:latest')

# Создание контейнера из docker-compose.yml
services = client.compose.project_from_filename('docker-compose.yml').services
for service in services.values():
    service.create_container()

# Запуск контейнера
container = client.containers.get('my-container')
container.start()