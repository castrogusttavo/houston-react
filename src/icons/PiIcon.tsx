import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PiIcon({ iconName = 'pi', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
