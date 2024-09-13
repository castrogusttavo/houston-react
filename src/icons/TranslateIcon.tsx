import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TranslateIcon({ iconName = 'translate', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
