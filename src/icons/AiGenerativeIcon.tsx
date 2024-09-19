import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AiGenerativeIcon({
  iconName = 'ai-generative',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
