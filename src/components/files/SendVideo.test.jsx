// Generated by CodiumAI

describe('SendVideo', () => {

    // User can enter a video name and email of receiver, and click send button
    it('should update the video name and email when input fields are changed', () => {
      // Arrange
      const wrapper = shallow(<SendVideo />);
      const videoNameInput = wrapper.find('input[type="text"]').at(0);
      const emailInput = wrapper.find('input[type="text"]').at(1);
  
      // Act
      videoNameInput.simulate('change', { target: { value: 'New Video Name' } });
      emailInput.simulate('change', { target: { value: 'test@example.com' } });
  
      // Assert
      expect(wrapper.state('video_name')).toEqual('New Video Name');
      expect(emailInput.prop('value')).toEqual('test@example.com');
    });


});
