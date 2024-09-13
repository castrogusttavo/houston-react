import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AiPhone01Icon({
  iconName = 'ai-phone-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
