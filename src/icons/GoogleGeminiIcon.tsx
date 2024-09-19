import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GoogleGeminiIcon({
  iconName = 'google-gemini',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
