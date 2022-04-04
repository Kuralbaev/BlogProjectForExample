from rest_framework.response import Response


def HandlerResponse(message, status=200):
    _data = {
        'result': True if status == 200 else False,
        'data': message
    }

    return Response(_data)
