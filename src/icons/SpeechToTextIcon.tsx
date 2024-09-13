import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SpeechToTextIcon({
  iconName = 'speech-to-text',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
