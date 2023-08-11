import Async from "./Async";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


describe('Async component', () => {
    test('renders post if request succeeds', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First post'}]
        });

        render(<Async />);

        const listItemElement = await screen.findAllByRole('listitem');
        expect(listItemElement).not.toHaveLength(0);//if the length is not 0
    });
});