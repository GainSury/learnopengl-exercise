#version 330 core
in vec3 ourColor;
in vec2 TexCoord;

out vec4 color;

// Texture samplers
uniform sampler2D ourTexture1;
uniform sampler2D ourTexture2;

uniform float mixTexture;

void main()
{
	// Linearly interpolate between both textures (second texture is only slightly combined)
	vec2 TexCoord1=vec2(2*TexCoord.x,2*TexCoord.y);
	color = mix(texture(ourTexture1, TexCoord), texture(ourTexture2, TexCoord1), mixTexture);
}