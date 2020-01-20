import time
from app import app
from uuid import uuid4
from flask import jsonify

@app.route('/')
@app.route('/index')
def index():
    return "Hello, World!"

@app.route("/infinite-loop")
def infinite_loop():
    a = 0
    while True:
        a += random.random() - 0.5


@app.route("/sleep/<int:seconds>")
@app.route("/s/<int:seconds>")
def sleep(seconds):
    SLEEP_PERIOD_S = 5
    request_id = uuid4()
    for i in range(int(seconds / SLEEP_PERIOD_S)):
        time.sleep(SLEEP_PERIOD_S)
        print(
            f"[request {request_id}] slept {(i + 1) * SLEEP_PERIOD_S} seconds, zzzz"
        )
    return jsonify({"result": f"[request {request_id}] slept for {seconds} seconds, done"})
