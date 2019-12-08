# Keras Model conversion to use on TensorFlow.js

## Create Keras Modal
[Keras.io](https://keras.io/why-use-keras/)
Trained models are stored as keras_modal.h5

## Install tensorflowjs
`pip install tensorflowjs`

## folder setup
`mkdir tfjs_files`

## Run converter
$ `tensorflowjs_converter --input_format keras \`
                        `path/to/keras_modal.h5 \`
                        `path/to/tfjs_target_dir`
### In our case
$ `tensorflowjs_converter --input_format keras ./keras_modal.h5 ./tfjs_files`

## Output
makes 4 files
1. model.json is our model
2. shards are used to speed up the loading and caching in the browser

## Load the model.json file into our browser
`const model = await tf.loadModel('http://foo.bar/tjfs_artifacts/model.json')`
