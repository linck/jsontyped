import * as assert from 'assert';
import { JsonLoader } from './../src/JsonLoader';
import { suite, test } from 'mocha-typescript'

@suite('JsonLoaderTest')
class JsonLoaderTest {

    @test('loadJsonTest')
    loadJsonTest() {
        let messages: Messages = JsonLoader.loadFile<Messages>('./test/test.json');
        assert.equal(messages.msg, 'hello');
        assert.equal(messages.msg2, 'hello2');
        assert.equal(messages.messages.hello, 'msg1');
        assert.equal(messages.messages.hello2, 'msg2');
    }

    @test('loadJsonTestFileName')
    loadJsonTestFileName() {
        let messages: Messages = JsonLoader.loadFile<Messages>('./test/', 'test.json');
        assert.equal(messages.msg, 'hello');
        assert.equal(messages.msg2, 'hello2');
        assert.equal(messages.messages.hello, 'msg1');
        assert.equal(messages.messages.hello2, 'msg2');
    }

    @test('loadJsonTestFileName')
    fileNotFound() {
        let messages: Messages = JsonLoader.loadFile<Messages>('./test/', 'a.json');
        assert.equal(messages, null);
        assert.equal(messages, undefined);
    }
}

interface Messages {
    msg: string;
    msg2: string;
    messages: { hello: string, hello2: string };
}